import React from "react";

const ConfirmationModal = ({ deletingDoctor, closeModal, deleteDoctor }) => {
  const { _id, name, imgUrl, email, specialty } = deletingDoctor;

  return (
    <div>
      <input type="checkbox" id="confirmationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Proceed with caution!</h3>
          <p className="py-4">
            This action is not reversible. Are you sure to delete{" "}
            <b className="text-red-600">{name}</b>?
          </p>
          <div className="modal-action">
            <label
              onClick={closeModal}
              htmlFor="confirmationModal"
              className="btn">
              cancel
            </label>
            <button
              onClick={() => deleteDoctor(_id)}
              type="button"
              className="btn btn-accent">
              delete now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
