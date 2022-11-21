import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { APP_SERVER } from "../../../utilities/utilities";

const CheckoutForm = ({ booking }) => {
  const { _id, price, patientName, email } = booking;

  const stripe = useStripe();
  const elements = useElements();
  const [cardFeedback, setCardFeedback] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${APP_SERVER}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    });

    if (error) {
      console.log("[error]", error);
      setCardFeedback(error.message);
    } else {
      setCardFeedback("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setIsProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email
          }
        }
      });

    if (confirmError) {
      setCardFeedback(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        transactionId: paymentIntent.id,
        bookingId: _id,
        email,
        price
      };
      fetch(`${APP_SERVER}/payments`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            toast.success("Your payment is successful! 🎉");
            setCardFeedback(
              `Payment is successful! Your transaction id: ${paymentIntent.id}`
            );
            setIsProcessing(false);
          }
        })
        .catch(err => {
          toast.error("Something went wrong! ⚠️");
          console.error(err);
        });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4"
                }
              },
              invalid: {
                color: "#9e2146"
              }
            }
          }}
        />
        <button
          type="submit"
          className="btn btn-primary m-4"
          disabled={!stripe || !clientSecret || isProcessing}>
          Pay
        </button>
      </form>
      {cardFeedback && (
        <div className="">
          <p className="">{cardFeedback}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
