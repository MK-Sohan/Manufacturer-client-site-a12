// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";

// const Addproduct = () => {
//   const [productname, setProductname] = useState("");
//   const [price, setPrice] = useState(0);
//   const [availablequan, setAvailablequan] = useState(0);
//   const [minquantity, setMinquantity] = useState(0);
//   const [description, setDescription] = useState("");

//   const handleproductname = (e) => {
//     const productname = e.target.value;
//     setProductname(productname);
//     console.log(productname);
//   };
//   const handlePrice = (e) => {
//     const price = e.target.value;
//     setPrice(price);
//     console.log(price);
//   };
//   const handleavailablequantity = (e) => {
//     const availablequantity = e.target.value;
//     setAvailablequan(availablequantity);
//     console.log(availablequantity);
//   };
//   const handleminimumorder = (e) => {
//     const minimumorderquantity = e.target.value;
//     setMinquantity(minimumorderquantity);
//     console.log(minimumorderquantity);
//   };
//   const handleDescription = (e) => {
//     const description = e.target.vlue;
//     setDescription(description);
//     console.log(description);
//   };

//   const handleaddproductform = (e) => {
//     e.preventDefault();
//     const newproduct = {
//       productname: productname,
//       price: price,
//       minimumorderquantity: minquantity,
//       availablequantity: availablequan,
//       description: description,
//     };

//     fetch("https://cryptic-journey-76382.herokuapp.com/tool", {
//       method: "POST",
//       body: JSON.stringify(newproduct),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };

//   return (
//     <div className="flex h-screen w-screen justify-center items-center">
//       <div className="card lg:w-4/12   bg-base-100 shadow-xl">
//         <div className="card-body ">
//           <h2 className="text-center text-2xl font-bold">Add product</h2>
//           <form onSubmit={handleaddproductform}>
//             <div className="form-control w-full mx-auto max-w-xs">
//               <label className="label">
//                 <span className="label-text">Product Name</span>
//               </label>
//               <input
//                 onChange={handleproductname}
//                 type="text"
//                 placeholder="product name"
//                 className="input input-bordered w-full max-w-xs"
//                 // {...register("name", {
//                 //   required: {
//                 //     value: true,
//                 //     message: "Name is Required",
//                 //   },
//                 // })}
//               />
//               {/* <label className="label">
//                 {errors.name?.type === "required" && (
//                   <span className="label-text-alt text-red-500">
//                     {errors.name.message}
//                   </span>
//                 )}
//               </label> */}
//             </div>

//             <div className="form-control w-full mx-auto mx-auto max-w-xs">
//               <label className="label">
//                 <span className="label-text">Price</span>
//               </label>
//               <input
//                 onChange={handlePrice}
//                 type="number"
//                 placeholder="price"
//                 className="input input-bordered w-full mx-auto max-w-xs"
//                 // {...register("price", {
//                 //   required: {
//                 //     value: true,
//                 //     message: "Price is Required",
//                 //   },
//                 // })}
//               />
//               {/* <label className="label">
//                 {errors.price?.type === "required" && (
//                   <span className="label-text-alt text-red-500">
//                     {errors.price.message}
//                   </span>
//                 )}
//               </label> */}
//             </div>
//             <div className="form-control w-full mx-auto max-w-xs">
//               <label className="label">
//                 <span className="label-text">Available Quantity</span>
//               </label>
//               <input
//                 onChange={handleavailablequantity}
//                 type="number"
//                 placeholder="available quantity"
//                 className="input input-bordered w-full mx-auto max-w-xs"
//                 // {...register("aquantity", {
//                 //   required: {
//                 //     value: true,
//                 //     message: "Quantity is Required",
//                 //   },
//                 // })}
//               />
//               {/* <label className="label">
//                 {errors.aquantity?.type === "required" && (
//                   <span className="label-text-alt text-red-500">
//                     {errors.aquantity.message}
//                   </span>
//                 )}
//               </label> */}
//             </div>
//             <div className="form-control w-full mx-auto max-w-xs">
//               <label className="label">
//                 <span className="label-text">Minimum Order Quantity</span>
//               </label>
//               <input
//                 onChange={handleminimumorder}
//                 type="number"
//                 placeholder="minimum order quantity"
//                 className="input input-bordered w-full mx-auto max-w-xs"
//                 // {...register("minquantity", {
//                 //   required: {
//                 //     value: true,
//                 //     message: "Minimum Order Quantity is Required",
//                 //   },
//                 // })}
//               />
//               {/* <label className="label">
//                 {errors.minquantity?.type === "required" && (
//                   <span className="label-text-alt text-red-500">
//                     {errors.minquantity.message}
//                   </span>
//                 )}
//               </label> */}
//             </div>
//             <div className="form-control w-full mx-auto max-w-xs">
//               <label className="label">
//                 <span className="label-text">Description</span>
//               </label>
//               <textarea
//                 onChange={handleDescription}
//                 type="text"
//                 placeholder="Description"
//                 className="input input-bordered w-full mx-auto max-w-xs"
//                 // {...register("description", {
//                 //   required: {
//                 //     value: true,
//                 //     message: "Description is Required",
//                 //   },
//                 // })}
//               />
//               {/* <label className="label">
//                 {errors.description?.type === "required" && (
//                   <span className="label-text-alt text-red-500">
//                     {errors.description.message}
//                   </span>
//                 )}
//               </label> */}
//             </div>
//             {/* <div className="form-control w-full mx-auto max-w-xs">
//               <label className="label">
//                 <span className="label-text">Add a Image</span>
//               </label>
//               <input
//                 type="file"
//                 placeholder="Image"
//                 className="input input-bordered w-full mx-auto max-w-xs"
//                 {...register("image", {
//                   required: {
//                     value: true,
//                     message: "Image is Required",
//                   },
//                 })}
//               />
//               <label className="label">
//                 {errors.image?.type === "required" && (
//                   <span className="label-text-alt text-red-500">
//                     {errors.image.message}
//                   </span>
//                 )}
//               </label>
//             </div> */}

//             {/* <input
//             onClick={handleAddproduct}
//             className="btn justify-items-center w-full lg:ml-32 max-w-xs text-white"
//             type="submit"
//             value="Add"
//           /> */}
//             <button className="btn  btn-success w-52 mt-6 mb-10  text-black">
//               Add Review
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addproduct;
