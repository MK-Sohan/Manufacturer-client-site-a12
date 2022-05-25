import React from "react";
import back from "../../../image/pexels-miguel-á-padriñán-3930097.jpg";
import "./AboutBusiness.css";
import icon1 from "../../../image/about services/delivery.jpg";
import icon2 from "../../../image/about services/secure.png";
import icon3 from "../../../image/about services/support.png";
import icon4 from "../../../image/imgbin_computer-icons-user-profile-user-account-png.png";
const AboutBusiness = () => {
  return (
    <div>
      <div class="hero min-h-12 bg-orange-500 maincontainer">
        {/* <div class="hero-overlay bg-opacity-60"></div> */}
        <div class="hero-content text-center text-neutral-content">
          <div class=" flex mb-52 ">
            {/* card start */}
            <div class="card w-96 bg-base-100 shadow-xl image-full mr-7">
              <figure>
                <img src={icon1} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="text-4xl">
                  1100+ <br /> Safe Delivery
                </h2>
                <p className="text-3xl mt-5">
                  We will deliver your product safely
                </p>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mr-7 image-full">
              <figure>
                <img src={icon2} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="text-4xl">Payment </h2>
                <p className="text-3xl mt-5">
                  We provide best payment security
                </p>
                <div class="card-actions justify-end"></div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mr-7 image-full">
              <figure>
                <img src={icon3} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="text-4xl">
                  24/7 <br /> Support
                </h2>
                <p className="text-3xl mt-5">We have 24 hours support</p>
                <div class="card-actions justify-end"></div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mr-7 image-full">
              <figure>
                <img src={icon4} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="text-4xl">1000+</h2>
                <p className="text-3xl mt-5">Reviews</p>
                <div class="card-actions justify-end"></div>
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
        <h1 className="text-center text-4xl mt-96 font-bold hone text-slate-500">
          IF YU HAVE ANY KIND OF QUESTION PLEASE REQUEST A QUICK QUOTE
        </h1>
      </div>
    </div>
  );
};

export default AboutBusiness;
