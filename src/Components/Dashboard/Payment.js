import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import CheckoutForm from "./CheckoutForm ";

const stripePromise = loadStripe(
  "pk_test_51L3193EMgmTWmjRxZNGYLJJuYbnYvzqtC13pcNrykLTuHkk40fzXkwWYzZqqtomG5QuSUWqPjd2ePMZzi7DFPPz100JSC04cn3"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { payid } = useParams();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payorder/${payid}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [payid]);
  console.log(order);
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-14">
        <div class="card-body">
          <p className="text-success">Hello</p>
          <h2 class="card-title">
            Pay for : {order.productname} of {order.orderquantity} piece
          </h2>

          <p>Please pay $ {order.price} </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
