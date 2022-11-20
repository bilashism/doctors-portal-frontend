import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Payment = () => {
  const {
    _id,
    treatmentName,
    patientName,
    selectedSlot,
    price,
    userSelectedDate,
    ...rest
  } = useLoaderData();
  console.log(_id, rest);

  useTitle(`${treatmentName}'s payment`);

  return (
    <div>
      <div className="">
        <h2 className="">
          Payment for <b className="text-green-500">{treatmentName}</b>{" "}
        </h2>
        <p className="">
          Dear <b className="">{patientName}</b>,
          <br />
          Please pay <b className="">${price}</b> for your appointment on{" "}
          <time>{userSelectedDate}</time> at <time>{selectedSlot}</time>
        </p>
      </div>
    </div>
  );
};

export default Payment;
