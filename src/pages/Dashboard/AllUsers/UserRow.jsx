import React from "react";

const UserRow = ({ user, idx }) => {
  const { _id, email, name } = user;
  return (
    <tr className="hover">
      <th>{idx}</th>
      <td>{email}</td>
      <td>{name}</td>
      <td>hello</td>
      <td>red</td>
    </tr>
  );
};

export default UserRow;
