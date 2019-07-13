import React, { useContext } from "react";
import ModalContext from "../../contexts/Modal/modalContext";

const Modal = () => {
  // Contexts
  const modalContext = useContext(ModalContext);
  const { modalClasses, modalContent, hideModal } = modalContext;

  return (
    <div className="modal-container">
      <div className={`modal ${modalClasses}`}>
        <p className="modal-content">{modalContent}</p>
        <button onClick={() => hideModal()} className="modal-closing-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
