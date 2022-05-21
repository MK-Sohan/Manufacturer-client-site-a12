import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="mt-10">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.image} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{review.name}</h4>
              {/* <p>{review.location}</p> */}
            </div>
          </div>
          <p>Rating: {review.rating} </p>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
