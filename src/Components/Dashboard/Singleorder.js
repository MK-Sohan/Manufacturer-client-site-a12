import React from "react";
import { Link, useParams } from "react-router-dom";
import useMyorder from "../Hookes/useMyorder";
import Loading from "../Share/Loading";

const Singleorder = ({ order, isloading, setIsloading, setDeletingorder }) => {
  // console.log(order);
  // const { paymentid } = useParams();
  const [myOrders, setMyorder] = useMyorder();

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
        {/* !order.paid */}
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            {" "}
            <button class="btn btn-primary btn-xs  bg-slate-800 text-whitebtn-xs">
              Pay
            </button>
          </Link>
        )}
        {order.price && order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            {" "}
            <button class="btn btn-primary btn-xs  bg-slate-800 text-whitebtn-xs">
              Paid
            </button>
          </Link>
        )}
      </th>
      <th>
        <label
          onClick={() => setDeletingorder(order)}
          for="delete-confirm-modal"
          class="btn  btn-error text-slate-600 btn-xs"
        >
          Delete
        </label>
      </th>
    </tr>
  );
};

export default Singleorder;
