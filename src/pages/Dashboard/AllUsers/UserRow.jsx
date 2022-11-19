import React from "react";
import toast from "react-hot-toast";
import { APP_SERVER } from "../../../utilities/utilities";

const UserRow = ({ user, idx, refetch }) => {
  const { _id, email, name, role } = user;

  const makeAdmin = id => {
    fetch(`${APP_SERVER}/users/admin/${id}`, {
      method: "put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount >= 1) {
          toast.success(`${name} is an admin now!`);
          refetch();
        }
      })
      .catch(err => console.error(err));
  };

  const deleteUser = id => {
    console.log(id);
  };

  return (
    <tr className="hover">
      <th>{idx}</th>
      <td>{email}</td>
      <td>{name}</td>
      <td>
        {role !== "admin" && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => makeAdmin(_id)}>
            make admin
          </button>
        )}
      </td>
      <td>
        <button
          className="btn btn-accent"
          type="button"
          onClick={() => deleteUser(_id)}>
          delete user
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
