import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const useMyorder = () => {
  const [myOrders, setMyorder] = useState([]);
  const [user] = useAuthState(auth);
  const [isloading, setIsloading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://cryptic-journey-76382.herokuapp.com/myorder/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/");
        }

        return res.json();
      })
      .then((data) => setMyorder(data));
  }, [myOrders, isloading]);
  return [myOrders, setMyorder, isloading, setIsloading];
};

export default useMyorder;
