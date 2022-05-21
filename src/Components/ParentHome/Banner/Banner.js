import React from "react";
import video from "./banner/Untitled 11_1080p.mp4";
import "./Banner.css";
const Banner = () => {
  return (
    <div className=" main">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <p>START YOUR JURNEY WITH </p>
        <h1>SpaceDesk Mechanical</h1>

        <button className="btn bg-orange-600 ml-9 mt-4">About Us</button>
      </div>
    </div>
  );
};

export default Banner;
