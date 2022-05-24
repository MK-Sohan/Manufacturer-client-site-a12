import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../Hookes/useAdmin";

import useMyorder from "../Hookes/useMyorder";
import Deletingordermodal from "./Deletingordermodal";

import Singleorder from "./Singleorder";

const Myorder = () => {
  const [myOrders, isloading, setIsloading] = useMyorder();
  const [deletingOrder, setDeletingorder] = useState(null);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      {!admin && (
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
                <Singleorder
                  isloading={isloading}
                  setIsloading={setIsloading}
                  key={order._id}
                  order={order}
                  setDeletingorder={setDeletingorder}
                ></Singleorder>
              ))}
            </tbody>
          </table>
          {deletingOrder && (
            <Deletingordermodal
              deletingOrder={deletingOrder}
            ></Deletingordermodal>
          )}
        </div>
      )}
    </>
  );
};

export default Myorder;
