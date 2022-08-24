import React from "react";

function AdminHandleModal() {
  return (
    <div className="admin__handleModal">
      <div className="admin__handleModalForm">
        <div className="admin__handleModalForm--tittle">
          Are you sure about that ?{" "}
        </div>
        <div className="admin__handleModalForm--handle">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}

export default AdminHandleModal;
