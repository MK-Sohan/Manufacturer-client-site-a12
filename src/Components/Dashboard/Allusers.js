import React from "react";
import { useQuery } from "react-query";
import Allproducts from "../Allproducts/Allproducts";
import Loading from "../Share/Loading";
import SingleUser from "./SingleUser";

const Allusers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://cryptic-journey-76382.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  //   console.log(users);
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="900"
      class="overflow-x-auto w-full"
    >
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>email</th>
            <th>Make Admin</th>
            <th>Remove user</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <SingleUser refetch={refetch} user={user}></SingleUser>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
