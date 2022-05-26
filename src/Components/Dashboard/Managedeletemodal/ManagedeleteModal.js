import React from "react";

const ManagedeleteModal = ({ deletemanageorder, refetch }) => {
  const handleDeleteorder = (id) => {
    // const proceed = window.confirm("are you shure?");

    fetch(`https://cryptic-journey-76382.herokuapp.com/admindelete/${id}`, {
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
        id="manageorder-delete-modal"
        class="modal-toggle"
      />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are You Shure You Want to Delete{" "}
            <span className="text-green-600">
              {deletemanageorder.productname}
            </span>
          </h3>
          <p class="py-4">
            If you delete it it will deleted parmanantly from manage order
          </p>
          <div class="modal-action">
            <label for="manageorder-delete-modal" class="btn">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteorder(deletemanageorder._id)}
              for="manageorder-delete-modal"
              class="ml-56 btn btn-error"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedeleteModal;
