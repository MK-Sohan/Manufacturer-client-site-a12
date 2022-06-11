import React from "react";

const Joinus = () => {
  return (
    <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="1500">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/bRHLgLf/rafael-juarez-h-TUd-Xgbhd3o-unsplash.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold  ">Let’s Keep it Made in BD</h1>
            <p class="py-6   ">
              Join us in fighting for good-paying, working class jobs and a
              robust manufacturing sector. <br /> If you check the box below,{" "}
              <br />
              you’ll also sign-up for our morning newsletter, <br /> which
              features the must-read headlines of the day and exclusive content
              on what’s happening in the manufacturing movement.
            </p>
            <input
              type="text"
              placeholder="Your First Name"
              class="input input-bordered w-full max-w-xs   "
            />
            <input
              type="text"
              placeholder="Your Last Name"
              class="input input-bordered w-full max-w-xs  "
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs mt-7 "
            />{" "}
            <input
              type="text"
              placeholder="Your Address"
              class="input input-bordered w-full max-w-xs  "
            />{" "}
            <br />
            <button class="btn btn-success ml-4 mt-6">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
