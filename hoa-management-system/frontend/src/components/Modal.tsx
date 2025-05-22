import type { CSSProperties, ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const modalStyles: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const dialogStyles: CSSProperties = {
    background: "white",
    padding: "1rem",
    borderRadius: "8px",
    minWidth: "300px",
  };
  return ReactDOM.createPortal(
    <div style={modalStyles} onClick={onClose}>
      <div style={dialogStyles} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ float: "right" }}></button>
        {children}
      </div>
    </div>,
    document.body
  );
}
