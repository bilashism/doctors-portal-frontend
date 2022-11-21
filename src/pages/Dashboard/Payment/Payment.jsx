import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);

const Payment = () => {
  const booking = useLoaderData();
  const {
    _id,
    treatmentName,
    patientName,
    selectedSlot,
    price,
    userSelectedDate,
    ...rest
  } = booking;
  // console.log(_id, rest);

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

      <div className="py-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
