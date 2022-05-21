import React from "react";

const Singletool = ({ tool }) => {
  const {
    availablequantity,
    description,
    image,
    minimumorderquantity,
    price,
    productname,
    _id,
  } = tool;
  console.log(tool.availablequantity);
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
          <span> {availablequantity}</span>
          <span className="ml-2">{productname}</span>
        </p>
        <p>
          <span className="font-bold">Minimum Order Quantity: </span>{" "}
          {minimumorderquantity}
        </p>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Singletool;
