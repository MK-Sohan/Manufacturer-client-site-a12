import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="mt-10">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className=" items-center">
            <div class="avatar ml-28">
              <div class="w-24 mask mask-hexagon  ">
                <img className="" src={review.image} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl text-center">{review.name}</h4>
              {/* <p>{review.location}</p> */}
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
