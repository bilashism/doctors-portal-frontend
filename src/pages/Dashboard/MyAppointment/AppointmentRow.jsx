import React from "react";

const AppointmentRow = ({ booking, idx }) => {
  const { _id, treatmentName, userSelectedDate, selectedSlot } = booking;
  return (
    <tr className="hover">
      <th>{idx}</th>
      <td>{treatmentName}</td>
      <td>{userSelectedDate}</td>
      <td>{selectedSlot}</td>
    </tr>
  );
};

export default AppointmentRow;
