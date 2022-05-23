import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import image from "../../image/imgbin_computer-icons-user-profile-user-account-png.png";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/profile/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <Link to="/dashboard/editmyprofile">
          {" "}
          <button class="btn btn-primary btn-xs  ml-1 bg-slate-800 text-whitebtn-xs">
            Edit Profile
          </button>
        </Link>
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-sm h-28" />
        </figure>
        <div class="card-body  ">
          <h2 class="card-title">NAME: {user.displayName}</h2>
          <p className="font-bold">EMAIL: {user.email}</p>
          <p className="font-bold">City: {profile.city}</p>
          <p className="font-bold">Phone no: {profile.phone}</p>
          <p className="font-bold">
            Educational Qualification: {profile.qualification}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
