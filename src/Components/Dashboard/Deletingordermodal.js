import React from "react";

const Deletingordermodal = ({ deletingOrder }) => {
  console.log(deletingOrder);
  const { productname } = deletingOrder;

  const handleDeleorder = (id) => {
    fetch(`https://cryptic-journey-76382.herokuapp.com/myorder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Do You Want to Delete {productname}</h3>
          <p class="py-4">After Deleting your order you cant get it back</p>
          <div class="modal-action">
            <label for="delete-confirm-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deletingordermodal;
