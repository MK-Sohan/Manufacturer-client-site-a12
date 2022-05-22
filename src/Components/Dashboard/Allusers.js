import React from "react";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";
import SingleUser from "./SingleUser";

const Allusers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(users);
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>email</th>
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
