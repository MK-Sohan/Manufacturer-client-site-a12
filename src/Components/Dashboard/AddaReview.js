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
    fetch("https://cryptic-journey-76382.herokuapp.com/review", {
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
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="900"
      className="flex justify-center items-center h-screen"
    >
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
              <p class="label-text">Enter Your rating here</p> <br />
            </label>
            <label class="label">
              <p class="label-text">Rating must be 0-5</p>
            </label>
            <label class="input-group">
              <input
                required
                onChange={handlerating}
                type="number"
                value={rating}
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
            <button
              disabled={rating > 5 || rating < 0}
              className="btn  btn-success w-52 mt-6 mb-10  text-black"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddaReview;
