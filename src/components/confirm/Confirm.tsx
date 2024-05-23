import Modal from "@/pages/modal";
import { PropsWithChildren } from "react";
import Button from "@/components/button";
import Row from "@/components/row";
import { useConfirmContext } from "@/context/confirmContext";

function Confirm({ children }: PropsWithChildren) {
  const { handleResult, backdropClosable } = useConfirmContext();

  const handleBackdrop = () => {
    if (backdropClosable) {
      handleResult(false);
    }
  };

  return (
    <Modal onClick={handleBackdrop}>
      <div className="my-5">
        <h1 className="text-xl font-bold">{children}</h1>
      </div>
      <Row>
        <Button
          type="button"
          variant={"danger"}
          onClick={() => handleResult(true)}
        >
          확인
        </Button>
        <Button type="button" onClick={() => handleResult(false)}>
          취소
        </Button>
      </Row>
    </Modal>
  );
}

export default Confirm;
