import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  title: string;
  children: ReactNode;
  open: boolean;
  className: string;
  onClose: (() => void) | undefined;
}
export default function Modal({
  children,
  title,
  open,
  className = "",
  onClose,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (open && modal) {
      modal.showModal();
    }

    return () => {
      console.log("open from MODAL return() - ", open);
      console.trace();
      if (modal) {
        modal.close();
      }
    };
  }, [open]);

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    throw new Error("Modal root element not found");
  }

  return createPortal(
    <dialog
      open={open}
      ref={dialogRef}
      title={title}
      className={`modal ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    modalRoot
  );
}
