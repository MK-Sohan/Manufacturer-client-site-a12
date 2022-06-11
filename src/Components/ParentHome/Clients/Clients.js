import React from "react";
import "./Clients.css";
import icon1 from "../../../image/about services/delivery.jpg";
import icon2 from "../../../image/about services/secure.png";
import icon3 from "../../../image/about services/support.png";
import icon4 from "../../../image/110-1102927_profile-icon-png.png";
const Clients = () => {
  return (
    <div className="clients">
      <div className="container mx-auto ">
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="  row flex justify-between  "
        >
          <div class="card singlecard w-96 bg-base-100 shadow-xl image-full mr-7">
            <figure>
              <img src={icon1} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="text-4xl text-center">
                1100+ <br /> Safe Delivery
              </h2>
              <p className="text-3xl mt-5 text-center">
                We will deliver your product safely
              </p>
            </div>
          </div>
          <div class="card singlecard w-96 bg-base-100 shadow-xl mr-7 image-full">
            <figure>
              <img src={icon2} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="text-4xl text-center">Payment </h2>
              <p className="text-3xl mt-5 text-center">
                We provide best payment security
              </p>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
          <div class="card singlecard w-96 bg-base-100 shadow-xl mr-7 image-full">
            <figure>
              <img src={icon3} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="text-4xl text-center">
                24/7 <br /> Support
              </h2>
              <p className="text-3xl mt-5 text-center">
                We have 24 hours support
              </p>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
          <div class="card singlecard w-96 bg-base-100 shadow-xl mr-7 image-full">
            <figure>
              <img src={icon4} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="text-4xl text-center">1000+</h2>
              <p className="text-3xl mt-5 text-center">Reviews</p>
              <div class="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
