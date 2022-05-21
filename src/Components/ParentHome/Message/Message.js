import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <div>
      <div className="checkout-container">
        <div className="all-container">
          <div className="checkout-inputs">
            <h1 className="checkout-title text-center text-white">
              REQUEST A QUICK QUOTE
            </h1>
            <p className="text-center text-white mb-9 ">
              We love to listen and we are eagerly waiting to talk to you
              regarding your project. <br /> Get in touch with us if you have
              any queries and we will get back to you as soon as possible.
            </p>
            <div className="input-1">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="input-2">
              <input
                type="email"
                name="checkout-email"
                id=""
                placeholder="Your Email"
              />{" "}
            </div>
            <br />
            <button className="submit-button">Submit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
