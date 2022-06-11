import React from "react";
import { Link, useParams } from "react-router-dom";
import useMyorder from "../Hookes/useMyorder";
import Loading from "../Share/Loading";
import { AiFillDelete } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
const Singleorder = ({ order, isloading, setIsloading, setDeletingorder }) => {
  // console.log(order);
  // const { paymentid } = useParams();
  const [myOrders, setMyorder] = useMyorder();
  const { paid } = order;

  return (
    <tr data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
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
        $ {order.price}
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
            <button className="btn btn-xs btn-success">
              <GiPayMoney className="mr-3"></GiPayMoney> pay
            </button>
          </Link>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction id:{" "}
              <span className="text-success">{order.transactionId}</span>
            </p>
          </div>
        )}
      </th>
      <th>
        {!paid && (
          <label
            onClick={() => setDeletingorder(order)}
            for="delete-confirm-modal"
            class="btn  btn-error text-slate-600 btn-xs"
          >
            <AiFillDelete className="mr-3"></AiFillDelete> Delete
          </label>
        )}
      </th>
    </tr>
  );
};

export default Singleorder;
