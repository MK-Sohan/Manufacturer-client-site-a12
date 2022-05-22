import React from "react";

const Singleorder = ({ order }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img className="h-56 py-3" src={order.image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{order.productname}</h2>
        <p className="font-bold ">{order.price} per unit</p>
        <p>
          <span className="font-bold"> Available:</span>
          <span> {order.availablequantity} piece</span>
          <span className="ml-2">{order.productname}</span>
        </p>
        <p>
          <span className="font-bold">Minimum Order Quantity: </span>{" "}
          {order.minimumorderquantity} piece
        </p>
        <p>{order.detail}</p>
        <div class="card-actions justify-center mt-4">
          <button class="btn btn-success text-white font-bold">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Singleorder;
