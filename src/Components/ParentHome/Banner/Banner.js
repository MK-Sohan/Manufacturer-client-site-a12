import React from "react";
import video from "./banner/Untitled 11_1080p.mp4";
import "./Banner.css";
const Banner = () => {
  return (
    <div className=" main">
      <video src={video} autoPlay loop muted></video>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="content"
      >
        <p>START YOUR JURNEY WITH </p> <br />
        <span className="">
          <h1 className="   ">SpaceDesk Mechanical</h1>
        </span>{" "}
        <br />
        <button className=" ml-12 mt-4 btn btn-success text-white lg:ml-12 lg:mt-10 ">
          About Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
