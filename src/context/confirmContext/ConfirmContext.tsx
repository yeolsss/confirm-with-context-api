import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// 삭제하냐는 confirm을 기준으로.
// - 삭제 버튼 -> confirm open -> 확인버튼 -> 삭제 (return Promise true)
// - 삭제 버튼 -> confirm open -> 취소버튼 -> 취소 (return Promise false)
// - confirm이 닫힐때까지 기다려한다.
// 둘다 confirm을 닫음.

interface ConfirmContextType {
  handleConfirm: (
    confirmElement: ReactElement,
    backdropClosable?: boolean,
  ) => Promise<boolean>;
  handleResult: (confirm: boolean) => void;
  backdropClosable: boolean;
}

const initialContext: ConfirmContextType = {
  handleConfirm: () => Promise.resolve(false),
  handleResult: () => {},
  backdropClosable: true,
};

const ConfirmContext = createContext<ConfirmContextType>(initialContext);

export const useConfirmContext = () => {
  if (!ConfirmContext) {
    throw new Error("Confirm Context 범위가 아닙니다.");
  } else {
    return useContext(ConfirmContext);
  }
};

export const ConfirmProvider = ({ children }: PropsWithChildren) => {
  const [confirm, setConfirm] = useState<ReactElement | null>(null);
  const [backdropClosable, setBackdropClosable] = useState<boolean>(true);
  const [resolver, setResolver] = useState<
    ((value: boolean | PromiseLike<boolean>) => void) | null
  >(null);

  const handleConfirm: ConfirmContextType["handleConfirm"] = useCallback(
    (confirmElement, backdropClosable = true) => {
      return new Promise<boolean>((resolve) => {
        setResolver(() => resolve);
        setConfirm(confirmElement);
        setBackdropClosable(backdropClosable);
      });
    },
    [],
  );

  const handleResult = useCallback(
    (confirm: boolean) => {
      if (resolver) {
        resolver(confirm);
        setResolver(null);
        setConfirm(null);
      }
    },
    [resolver],
  );

  const value = useMemo(
    () => ({ handleConfirm, handleResult, backdropClosable }),
    [handleConfirm, handleResult, backdropClosable],
  );

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      {confirm}
    </ConfirmContext.Provider>
  );
};
