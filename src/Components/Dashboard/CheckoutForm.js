import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");

  const { price, email, name } = order;
  //   console.log(order);
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCarderror(error?.message || "");
    setSuccess("");
    if (error) {
      setCarderror(error.message);
    } else {
      setCarderror("");
    }
    // console.log(paymentMethod);

    const { paymentIntent, error: intenterror } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intenterror) {
      setCarderror(error.message);
    } else {
      setCarderror("");
      console.log(paymentIntent);
      setSuccess("Your Payment successfull");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-xs mt-7"
          type="submit"
          disabled={!stripe || clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success} </p>
          {/* <p>
            Your transaction Id:{" "}
            <span className="text-orange-500 font-bold"></span>{" "}
          </p> */}
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
