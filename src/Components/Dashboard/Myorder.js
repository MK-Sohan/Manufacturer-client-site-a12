import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Singleorder from "./Singleorder";

const Myorder = () => {
  const [myOrders, setMyorder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyorder(data));
  }, [myOrders]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto px-12">
      {/* <h1>this is my order section {myOrder.length}</h1> */}
      {myOrders.map((order) => (
        <Singleorder key={order._id} order={order}></Singleorder>
      ))}
    </div>
  );
};

export default Myorder;
