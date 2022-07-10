import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="Modal__background">
      <div className="Modal__layout">
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
