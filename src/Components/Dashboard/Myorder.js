import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Share/Loading";
import Singleorder from "./Singleorder";

const Myorder = () => {
  const [myOrders, setMyorder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyorder(data));
  }, [myOrders]);

  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>My orders</th>
            <th>Payment</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {myOrders?.map((order) => (
            <Singleorder key={order._id} order={order}></Singleorder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myorder;
