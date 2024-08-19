import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className=" modal closing backdrop:bg-[#0000008C] rounded-md w-[320px] md:w-1/2"
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
