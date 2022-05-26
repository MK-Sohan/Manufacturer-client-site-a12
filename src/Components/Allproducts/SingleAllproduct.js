import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../Hookes/useAdmin";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";

const SingleAllproduct = ({ tool, setDeleteproduct }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  //   useEffect(() => {
  //     fetch("https://cryptic-journey-76382.herokuapp.com/tool")
  //       .then((res) => res.json())
  //       .then((data) => setTools(data));
  //   }, []);

  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img className="h-56 py-3" src={tool.image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{tool.productname}</h2>
        <p>
          {" "}
          <span className="font-bold ">Price :</span> $ {tool.price} per unit
        </p>
        <p>
          <span className="font-bold"> Available:</span>
          <span> {tool.availablequantity} piece</span>
          <span className="ml-2">{tool.productname}</span>
        </p>
        <p>
          <span className="font-bold">Minimum Order Quantity: </span>{" "}
          {tool.minimumorderquantity} piece
        </p>
        <p>
          {" "}
          <span className="font-bold">About:</span> {tool.description}
        </p>
        <div class="card-actions justify-center mt-4">
          <button
            disabled={admin === true}
            class="btn btn-success text-white font-bold"
          >
            Purchase
          </button>
          {admin === true && (
            <>
              <label
                onClick={() => setDeleteproduct(tool)}
                for="allproduct-delete-modal"
                class="btn btn-error modal-button"
              >
                Delete
              </label>
              {/* <Link to="/dashboard">My Orders</Link> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAllproduct;
