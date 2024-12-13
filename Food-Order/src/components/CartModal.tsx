import { useImperativeHandle, forwardRef, useRef, ReactNode } from "react";
// import { createPortal } from "react-dom";
// import Cart from "./Cart";
export interface ModalProps {
  title: string;
  actions: ReactNode;
}
const CartModal = forwardRef(function Modal() {
  // { title, actions }: ModalProps,
  // ref
  const dialog = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       if (dialog && dialog.current) dialog.current!.showModal();
  //     },
  //   };
  // });
  return <div></div>;
  // return createPortal(
  //   <dialog id="modal" className="modal" ref={dialog}>
  //     <h2>{title}</h2>
  //     <Cart order={} />
  //     <form method="dialog" id="modal-actions">
  //       {actions}
  //     </form>
  //   </dialog>,
  //   document.getElementById("modal")
  // );
});

export default CartModal;
