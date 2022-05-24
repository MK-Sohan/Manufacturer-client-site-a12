import React, { useEffect, useState } from "react";

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
              <button className="btn btn-success btn-xs">Pay</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
};

export default Manageorders;
