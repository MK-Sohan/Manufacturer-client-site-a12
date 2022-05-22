import React from "react";
import Loading from "../Share/Loading";

const Singleorder = ({ order }) => {
  const handleDeleorder = (id) => {
    fetch(`http://localhost:5000/myorder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={order.image} alt="tool image" />
            </div>
          </div>
          <div>
            <div class="font-bold"></div>
          </div>
        </div>
      </td>
      <td>
        {order.productname}
        <br />
      </td>
      <td>
        {order.price}
        <br />
      </td>
      <td>{order.availablequantity} Piece </td>
      <td>
        {order.orderquantity} Piece
        <br />
      </td>

      <th>
        <button class="btn btn-primary btn-xs  bg-slate-800 text-whitebtn-xs">
          Pay
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDeleorder(order._id)}
          class="  btn btn-error text-slate-600 btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default Singleorder;
