import React from "react";

const Usermodal = ({ user }) => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="usermodal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Name: {user.displayName}</h3>
          <p class="py-4">
            <span className="font-bold ">Email: </span>
            {user.email}
          </p>
          <div class="modal-action">
            <label for="usermodal" class="btn">
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usermodal;
