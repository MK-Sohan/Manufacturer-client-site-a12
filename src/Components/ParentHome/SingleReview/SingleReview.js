import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const SingleReview = ({ review }) => {
  return (
    <div className="mt-10">
      <div className="card lg:max-w-lg bg-base-100 border-2 border-slate-200 hover:border-slate-400 ">
        <div className="card-body ">
          <div className=" items-center">
            <div>
              <h4 className="text-xl text-center">{review.name}</h4>
            </div>
          </div>
          <p className="font-bold flex items-center ">
            Rating: {review.rating}{" "}
            <AiTwotoneStar className="ml-2"></AiTwotoneStar>{" "}
          </p>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
