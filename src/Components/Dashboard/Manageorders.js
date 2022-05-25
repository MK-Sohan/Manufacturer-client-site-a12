import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manageorders = () => {
  const [allorders, setAllorders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/manageorder", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllorders(data));
  }, []);
  console.log(allorders);

  const handleDeleteorder = (id) => {
    const proceed = window.confirm("are you shure?");
    if (proceed) {
      fetch(`http://localhost:5000/admindelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = allorders.filter((sorder) => sorder._id !== id);
          setAllorders(remaining);
          console.log(data);
        });
    }
  };

  return (
    // <div class="overflow-x-auto">
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
        </tr>
      </thead>
      <tbody>
        {/* <!-- row 1 --> */}

        {allorders.map((allorder, index) => (
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
                  <button className="btn btn-xs btn-success">unpaid</button>

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
                    <span className="text-success">Paid</span>
                  </p>
                  <p>
                    Transaction id:{" "}
                    <span className="text-success">
                      {allorder.transactionId}
                    </span>
                  </p>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
};

export default Manageorders;
