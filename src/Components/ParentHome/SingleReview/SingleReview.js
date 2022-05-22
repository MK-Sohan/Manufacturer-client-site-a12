import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="mt-10">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className=" items-center">
            <div>
              <h4 className="text-xl text-center">{review.name}</h4>
            </div>
          </div>
          <p className="font-bold">Rating: {review.rating} </p>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
