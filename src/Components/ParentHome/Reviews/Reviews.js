import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className=" mt-12">
      <h1 className="text-center text-4xl font-bold text-cyan-500 ">
        What people say about us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center w-10/12 mx-auto px-12 mt-8 mb-9">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
