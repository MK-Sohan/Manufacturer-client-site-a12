import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const EditMyprofile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = async (data) => {
    const profileinfo = {
      qualification: data.qualification,
      city: data.city,
      phone: data.phone,
      link: data.link,
    };
    fetch(`http://localhost:5000/profile/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profileinfo),
    }).then((res) => res.json().then((data) => console.log(data)));
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Edit Your Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Educational Qralification</span>
              </label>
              <input
                type="text"
                placeholder="Qralification"
                className="input input-bordered w-full max-w-xs"
                {...register("qualification")}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">City/District</span>
              </label>
              <input
                type="text"
                placeholder="City/District"
                className="input input-bordered w-full max-w-xs"
                {...register("city")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered w-full max-w-xs"
                {...register("phone")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Social link</span>
              </label>
              <input
                type="link"
                placeholder="social link"
                className="input input-bordered w-full max-w-xs"
                {...register("link")}
              />
            </div>

            <input
              className="btn w-full max-w-xs mt-5 text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMyprofile;
