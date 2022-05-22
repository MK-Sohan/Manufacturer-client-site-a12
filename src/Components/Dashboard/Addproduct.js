import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Addproduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="card lg:w-4/12   bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="text-center text-2xl font-bold">Add product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="product name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full mx-auto mx-auto max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="price"
                className="input input-bordered w-full mx-auto max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                placeholder="available quantity"
                className="input input-bordered w-full mx-auto max-w-xs"
                {...register("aquantity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.aquantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.aquantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="minimum order quantity"
                className="input input-bordered w-full mx-auto max-w-xs"
                {...register("minquantity", {
                  required: {
                    value: true,
                    message: "Minimum Order Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.minquantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minquantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full mx-auto max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text">Add a Image</span>
              </label>
              <input
                type="file"
                placeholder="Image"
                className="input input-bordered w-full mx-auto max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn justify-items-center w-full lg:ml-32 max-w-xs text-white"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
