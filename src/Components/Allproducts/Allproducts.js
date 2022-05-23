import React from "react";
import { useNavigate } from "react-router-dom";
import useTootls from "../Hookes/useTootls";

const Allproducts = () => {
  const [tools, setTools] = useTootls();
  const navigate = useNavigate();
  const handleCheckout = (id) => {
    navigate(`/chaekout/${id}`);
  };
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold text-cyan-500 mb-8">
        {" "}
        Our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto px-12">
        {tools.map((tool) => (
          <div class="card w-96 bg-base-100 shadow-xl mb-10">
            <figure>
              <img className="h-56 py-3" src={tool.image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{tool.productname}</h2>
              <p className="font-bold ">{tool.price} per unit</p>
              <p>
                <span className="font-bold"> Available:</span>
                <span> {tool.availablequantity} piece</span>
                <span className="ml-2">{tool.productname}</span>
              </p>
              <p>
                <span className="font-bold">Minimum Order Quantity: </span>{" "}
                {tool.minimumorderquantity} piece
              </p>
              <p>{tool.description}</p>
              <div class="card-actions justify-center mt-4">
                <button
                  onClick={() => handleCheckout(tool._id)}
                  class="btn btn-success text-white font-bold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
