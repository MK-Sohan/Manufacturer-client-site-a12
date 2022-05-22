import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./Checkout.css";
const Checkout = () => {
  const { productid } = useParams();
  const [checkout, setCheckout] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState(0);
  const [detail, setDetail] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/tool/${productid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCheckout(data));
  }, []);
  //   console.log(checkout);

  const handlePlaceOrder = (addcheckout) => {
    const info = {
      image: addcheckout.image,
      productname: addcheckout.productname,
      price: addcheckout.price,
      availablequantity: addcheckout.availablequantity,
      minimumorderquantity: addcheckout.minimumorderquantity,
      orderquantity: orderQuantity,
      address: address,
      phone: phonenumber,
      detail: detail,
      email: user.email,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Order confirm");

        console.log(data);
      });
  };
  const handleAddress = (e) => {
    const address = e.target.value;
    setAddress(address);

    // console.log(address);
  };
  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhonenumber(phone);

    // console.log(phone);
  };
  const handleDetail = (e) => {
    const detail = e.target.value;
    setDetail(detail);

    // console.log(detail);
  };
  const handleOrderQuantity = (e) => {
    const quantity = e.target.value;
    setOrderQuantity(quantity);

    // console.log(quantity);
  };
  return (
    <div className="checkout-container">
      <div class="card w-6/12 bg-base-100 shadow-xl lg:mb-52  mx-auto  ">
        <figure>
          <img className="h-60 py-3" src={checkout.image} alt="Tools" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{checkout.productname}</h2>
          <p className="font-bold ">{checkout.price} per unit</p>
          <p>
            <span className="font-bold"> Available:</span>
            <span> {checkout.availablequantity} piece</span>
            <span className="ml-2">{checkout.productname}</span>
          </p>
          <p>
            <span className="font-bold">Minimum Order Quantity: </span>{" "}
            {checkout.minimumorderquantity} piece
          </p>
          <p>
            <span className="font-bold"> Your Order Quantity: </span>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Enter order amount</span>
              </label>
              <label class="input-group">
                <input
                  onChange={handleOrderQuantity}
                  type="number"
                  value={orderQuantity}
                  min={checkout.minimumorderquantity}
                  max={checkout.availablequantity}
                  placeholder={checkout.minimumorderquantity}
                  class="input input-bordered"
                />
                <span className="bg-transparent font-bold"> piece</span>
              </label>
            </div>{" "}
          </p>
          <p>{checkout.description}</p>
          <p className="font-bold mt-4">Give your Information below</p>
          <input
            onChange={handleAddress}
            type="text"
            name="address"
            placeholder="Your Address"
            class="input input-bordered input-info w-full max-w-xs"
          />
          <input
            type="number"
            onChange={handlePhone}
            name="phone"
            placeholder="Your Phonenumber"
            class="input input-bordered input-info w-full max-w-xs"
          />
          <textarea
            onChange={handleDetail}
            class="textarea  textarea-info w-80"
            placeholder="Bio"
          ></textarea>
          <div class="card-actions justify-center mt-4">
            <button
              disabled={
                orderQuantity < checkout.minimumorderquantity ||
                orderQuantity > checkout.availablequantity
              }
              onClick={() => handlePlaceOrder(checkout)}
              class="btn btn-success text-white font-bold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
