import React from "react";
import { AiFillDelete } from "react-icons/ai";

const HandleAllproductdeleteModal = ({ deleteproduct, refetch }) => {
  const HandleDeleteproduct = (id) => {
    const url = `https://cryptic-journey-76382.herokuapp.com/tool/${id}`;
    // const proceed = window.confirm("Are you shure?");

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => refetch());
  };

  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="allproduct-delete-modal"
        class="modal-toggle"
      />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you shure you want to delete{" "}
            <span className="text-cyan-400">{deleteproduct.productname}</span>
          </h3>
          <p class="py-4">After Deleting your product you cant get it back</p>
          <div class="modal-action">
            <label for="allproduct-delete-modal" class="btn">
              Cancel
            </label>
            <label
              onClick={() => HandleDeleteproduct(deleteproduct._id)}
              for="allproduct-delete-modal"
              class="btn btn-error text-white font-bold"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleAllproductdeleteModal;
