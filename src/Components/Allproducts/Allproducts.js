import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hookes/useAdmin";
import useTootls from "../Hookes/useTootls";
// import { AiFillDelete } from "react-icons/ai";
import SingleAllproduct from "./SingleAllproduct";
import HandleAllproductdeleteModal from "./HandleAllproductdeleteModal";
import Loading from "../Share/Loading";

const Allproducts = () => {
  // const [tools, setTools] = useTootls();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [deleteproduct, setDeleteproduct] = useState(null);
  console.log(admin);

  const navigate = useNavigate();
  const handleCheckout = (id) => {
    navigate(`/chaekout/${id}`);
  };

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tooldata", () =>
    fetch("https://cryptic-journey-76382.herokuapp.com/tool").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // const HandleDeleteproduct = (id) => {
  //   const url = `https://cryptic-journey-76382.herokuapp.com/tool/${id}`;
  //   const proceed = window.confirm("Are you shure?");
  //   if (proceed) {
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const remaining = tools.filter((tool) => tool._id !== id);
  //         setTools(remaining);
  //       });
  //   }
  // };

  // stoke update start==============

  // stoke update start==============

  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold text-cyan-500 mb-8">
        {" "}
        Manage Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto px-12">
        {tools.map((tool) => (
          <SingleAllproduct
            tool={tool}
            setDeleteproduct={setDeleteproduct}
          ></SingleAllproduct>
        ))}
      </div>
      {deleteproduct && (
        <HandleAllproductdeleteModal
          deleteproduct={deleteproduct}
          refetch={refetch}
        ></HandleAllproductdeleteModal>
      )}
    </div>
  );
};

export default Allproducts;
