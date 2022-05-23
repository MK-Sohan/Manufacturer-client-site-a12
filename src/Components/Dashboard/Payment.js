import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Share/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1szcEeKmERftmgF8QI9pi8RCuiF6xxiVXz5WEAauqJKzMAZw7LHQ5BhPccdNV5nxK5JXNjwkPbRmBLVAkYKlR200PNVxGAGY"
);

const Payment = () => {
  const [neweprice, setUpdatedprice] = useState(0);
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const url = `http://localhost:5000/paymentorder/${id}`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-14">
        <div class="card-body">
          <p className="text-success">Hello</p>
          <h2 class="card-title">
            Pay for : {order?.productname} of {order?.orderquantity} piece
          </h2>
          <p>
            We will see you on <span className="text-orange-700"></span>
          </p>
          <p>Please pay $ {order?.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
