import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hookes/useAdmin";

const Singletool = ({ tool }) => {
  const { productid } = useParams();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const {
    availablequantity,
    description,
    image,
    minimumorderquantity,
    price,
    productname,
    _id,
  } = tool;
  const navigate = useNavigate();
  const handleCheckout = (id) => {
    navigate(`/chaekout/${id}`);
  };

  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img className="h-56 py-3" src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productname}</h2>
        <p className="font-bold ">{price} per unit</p>
        <p>
          <span className="font-bold"> Available:</span>
          <span> {availablequantity} piece</span>
          <span className="ml-2">{productname}</span>
        </p>
        <p>
          <span className="font-bold">Minimum Order Quantity: </span>{" "}
          {minimumorderquantity} piece
        </p>
        <p>{description}</p>
        <div class="card-actions justify-center mt-4">
          <button
            disabled={admin === true}
            onClick={() => handleCheckout(tool._id)}
            class="btn btn-success text-white font-bold"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singletool;
