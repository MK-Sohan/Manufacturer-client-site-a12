import React from "react";

const Joinus = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-300">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/bRHLgLf/rafael-juarez-h-TUd-Xgbhd3o-unsplash.jpg"
            class="max-w-sm rounded-lg shadow-2xl mr-6"
          />
          <div>
            <h1 class="text-5xl font-bold ml-5 ">Let’s Keep it Made in BD</h1>
            <p class="py-6 text-xl ml-5 ">
              Join us in fighting for good-paying, working class jobs and a
              robust manufacturing sector. If you check the box below, you’ll
              also sign-up for our morning newsletter, which features the
              must-read headlines of the day and exclusive content on what’s
              happening in the manufacturing movement.
            </p>
            <input
              type="text"
              placeholder="Your First Name"
              class="input input-bordered w-full max-w-xs  ml-5 "
            />
            <input
              type="text"
              placeholder="Your Last Name"
              class="input input-bordered w-full max-w-xs ml-5 "
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs mt-7 ml-5"
            />{" "}
            <input
              type="text"
              placeholder="Your Address"
              class="input input-bordered w-full max-w-xs ml-5 "
            />{" "}
            <br />
            <button class="btn btn-success ml-5 mt-5">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
