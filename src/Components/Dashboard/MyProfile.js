import React from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div>
      <h1>this is my profile</h1>
      <Link to="/dashboard/editmyprofile">
        {" "}
        <button class="btn btn-primary btn-xs  bg-slate-800 text-whitebtn-xs">
          Edit My Profile
        </button>
      </Link>
    </div>
  );
};

export default MyProfile;
