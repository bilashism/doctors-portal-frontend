import React from "react";

const DoctorRow = ({ doctor, idx, setDeletingDoctor }) => {
  const { _id, name, imgUrl, email, specialty } = doctor;
  return (
    <tr className="hover">
      <th>{idx}</th>
      <th>
        <img
          src={imgUrl}
          alt={name}
          className="w-12 h-12 mx-auto object-cover rounded-full shadow"
          width="48"
          height="48"
          decoding="async"
          fetchpriority="low"
        />
      </th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="confirmationModal"
          className="btn btn-sm">
          delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
