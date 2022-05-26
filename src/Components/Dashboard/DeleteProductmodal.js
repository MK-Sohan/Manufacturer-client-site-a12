import React from "react";

const DeleteProductmodal = ({ deletingproduct }) => {
  const { productname } = deletingproduct;
  return (
    <div>
      {/* // <!-- The button to open modal --> */}

      {/* // <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="product-dalete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are You</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="product-dalete-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductmodal;
