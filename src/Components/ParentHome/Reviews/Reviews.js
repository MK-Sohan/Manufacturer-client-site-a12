import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import TestiSlider from "./TestiSlider";

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   fetch("https://cryptic-journey-76382.herokuapp.com/review")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);
  return (
    <section id="testimonials" className="section  bg-primary">
      <div className="container mx-auto">
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="flex flex-col items-center text-center"
        >
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block text-slate-500">
            What other people say
          </h2>
          <p className="subtitle">
            Here Some of My Satisfied Clients Testimonials Giving Below.
          </p>
        </div>
      </div>
      <TestiSlider></TestiSlider>
    </section>
  );
};

export default Reviews;
