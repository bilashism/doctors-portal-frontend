import React from "react";
import { Link } from "react-router-dom";

const AppointmentRow = ({ booking, idx }) => {
  const { _id, treatmentName, userSelectedDate, selectedSlot, price } = booking;
  return (
    <tr className="hover">
      <th>{idx}</th>
      <td>{treatmentName}</td>
      <td>{userSelectedDate}</td>
      <td>{selectedSlot}</td>
      <td>
        {price && !booking?.paid && (
          <Link to={`/dashboard/payment/${_id}`} className="btn btn-warning">
            Pay now
          </Link>
        )}
        {price && booking?.paid && (
          <button type="button" className="btn btn-warning" disabled>
            Paid
          </button>
        )}
      </td>
    </tr>
  );
};

export default AppointmentRow;
