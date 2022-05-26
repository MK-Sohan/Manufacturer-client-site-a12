import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Share/Loading";

const Manageorders = () => {
  // const [allorders, setAllorders] = useState([]);
  // const [isloading, setIsloading] = useState(false);
  const {
    data: allorders,
    isLoading,
    refetch,
  } = useQuery("allorder", () =>
    fetch("https://cryptic-journey-76382.herokuapp.com/manageorder", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    <Loading></Loading>;
  }

  console.log(allorders);

  const handleDeleteorder = (id) => {
    const proceed = window.confirm("are you shure?");
    if (proceed) {
      fetch(`https://cryptic-journey-76382.herokuapp.com/admindelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => refetch());
    }
  };
  const handleStatus = (id) => {
    const url = `https://cryptic-journey-76382.herokuapp.com/manageOrder/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
        toast.success("Order Shipped");
      });
  };

  return (
    <table class="table w-full">
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Available Quantity</th>
          <th>Customers Order</th>
          <th>Available Quantity</th>
          <th>Payment Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row 1 --> */}

        {allorders?.map((allorder, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img
                class="mask mask-squircle w-12 h-12"
                src={allorder.image}
                alt="Avatar Tailwind CSS Component"
              />
            </td>
            <td>{allorder.productname}</td>
            <td>{allorder.price}</td>
            <td>{allorder.availablequantity}</td>
            <td>{allorder.orderquantity}</td>
            <td>
              {allorder.price && !allorder.paid && (
                <>
                  <div>
                    <p>
                      <span className="text-red-600 text-success">Unpaid</span>
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteorder(allorder._id)}
                    className=" ml-56 btn btn-error btn-xs"
                  >
                    Delet
                  </button>
                </>
              )}
              {allorder.price && allorder.paid && (
                <div>
                  <p>
                    <span className="text-success">Already Paid</span>
                  </p>
                </div>
              )}
            </td>
            <td>
              <p className="font-bold">{allorder?.status}</p>
              {allorder?.status === "pending" && (
                <button
                  onClick={() => handleStatus(allorder?._id)}
                  className="btn btn-sm capitalize font-normal text-white "
                >
                  Shipped
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Manageorders;
