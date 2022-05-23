import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Allproducts from "../Allproducts/Allproducts";
import Loading from "../Share/Loading";

const useAllusers = () => {
  const [allusers, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //   const {
  //     data: users,
  //     isLoading,
  //     refetch,
  //   } = useQuery("users", () =>
  //     fetch("http://localhost:5000/user", {
  //       method: "GET",
  //       headers: {
  //         authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     }).then((res) => res.json())
  //   );
  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }
  //   console.log(users);
  return [allusers];
};

export default useAllusers;
