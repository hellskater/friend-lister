import React from "react";
import "./Modal.css";

function Modal({ deleteFriend, id, show, closeModal }) {
  return (
    <div className="modal">
      {!show ? null : (
        <div className="modal__bg">
          <div className="modal__body">
            <h1>Are you sure you want to delete?</h1>
            <div className="modal__buttons">
              <button className="modal__closeButton" onClick={closeModal}>
                Close
              </button>
              <button
                className="modal__deleteButton"
                onClick={() => {
                  closeModal();
                  deleteFriend(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
