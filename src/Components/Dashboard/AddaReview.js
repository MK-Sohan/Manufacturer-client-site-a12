import React, { useState } from "react";

const AddaReview = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const handlereviewform = (e) => {
    e.preventDefault();
    const reviewinfo = {
      name: name,
      rating: rating,
      review: review,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      body: JSON.stringify(reviewinfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handlerating = (e) => {
    const rating = e.target.value;
    setRating(rating);
  };
  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const handleReview = (e) => {
    const review = e.target.value;
    setReview(review);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form onSubmit={handlereviewform} className="card-body ">
          <h2 className="card-title mx-auto">Add a Review</h2>
          <h2 className="card-title ">Name</h2>
          <input
            onChange={handleName}
            required
            name="name"
            placeholder="Enter your name"
            type="text"
            className="input input-bordered w-full max-w-xs"
          />

          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter Your rating here</span>
            </label>
            <label class="input-group">
              <input
                required
                onChange={handlerating}
                type="number"
                // value={value}
                min="0"
                max="5"
                placeholder=""
                class="input input-bordered"
              />
            </label>
            <textarea
              onChange={handleReview}
              class="textarea  textarea-info w-48 mt-5"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="card-actions justify-center ">
            <button className="btn btn-outline btn-success w-52 mt-6 mb-10  text-black">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddaReview;
