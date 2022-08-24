import React, { useContext } from "react";

function AdminHandleModal({ setHandleOk, params }) {
  const handleDelete = context.handleDelete;
  return (
    <div className="admin__handleModal">
      <div className="admin__handleModalForm">
        <div className="admin__handleModalForm--tittle">
          Are you sure about that ?
        </div>
        <div className="admin__handleModalForm--handle">
          <button onClick={handleDe}>Yes</button>
          <button
            onClick={() => {
              setHandleOk(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHandleModal;
