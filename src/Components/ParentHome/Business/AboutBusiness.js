import React from "react";
import icon1 from "../../../image/about services/delivery.jpg";
import icon2 from "../../../image/about services/return.jpg";
import icon3 from "../../../image/about services/secure.png";
import icon4 from "../../../image/about services/support.png";
import icon5 from "../../../image/imgbin_computer-icons-user-profile-user-account-png.png";
import { FaShippingFast } from "react-icons/fa";

import "./AboutBusiness.css";
const AboutBusiness = () => {
  return (
    <div className="servicemain-container ">
      <h1 className="text-4xl text-center py-5 ">
        Thousand of business trust us
      </h1>
      <div className="aboutservice-container">
        <div className="free-ship">
          <img src={icon1} alt="" />
          <div className="detail">
            <h5 className="">Safe Shipping</h5>
            <p className="">On all orders over the world</p>
          </div>
        </div>

        <div className="payment-secure">
          <img src={icon3} alt="" />
          <div className="detail">
            <h5 className="">100% Payment Secure</h5>
            <p className="">Your payment are safe with us.</p>
          </div>
        </div>
        <div className="support">
          <img className="" src={icon4} alt="" />
          <div className="detail">
            <h5 className="">Support 24/7</h5>
            <p className="">Contact us 24 hours a day</p>
          </div>
        </div>
        <div className="support">
          <img className="" src={icon5} alt="" />
          <div className="detail">
            <h5 className="">7000+</h5>
            <p className="">Happy customers</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl mb-36 py-8">
        IF YOU HAVE ANY KIND OF QUESTION PLEASE REQUEST A QUICK QUOTE{" "}
      </h1>
    </div>
  );
};

export default AboutBusiness;
