import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  onClick: () => void;
}

function Modal({ children, onClick }: ModalProps) {
  return (
    <div
      onClick={onClick}
      className="fixed left-0 top-0 flex h-screen w-screen bg-black/50 backdrop-blur-2xl"
    >
      <section className="m-auto rounded-md bg-white px-8 py-5">
        {children}
      </section>
    </div>
  );
}

export default Modal;
