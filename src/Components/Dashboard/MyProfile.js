import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import image from "../../image/110-1102927_profile-icon-png.png";
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const url = `https://cryptic-journey-76382.herokuapp.com/updatedprofile/${user.email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div data-aos="flip-right" data-aos-easing="linear" data-aos-duration="900">
      <div class="card w-96 bg-base-100 shadow-xl">
        <Link to="/dashboard/editmyprofile">
          {" "}
          <button class="btn btn-primary btn-xs  ml-1 bg-slate-800 text-whitebtn-xs">
            <FiEdit className="mr-2"></FiEdit> Edit Profile
          </button>
        </Link>
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-sm h-28 " />
        </figure>
        <div class="card-body  ">
          <h2 class="card-title">NAME: {user?.displayName}</h2>
          <p className="font-bold">EMAIL: {user?.email}</p>

          <p className="font-bold">City: {profile.city}</p>
          <p className="font-bold">
            Educational Qualification: {profile.qualification}
          </p>
          <p className="font-bold">Phone no: {profile.phone}</p>
          <p className="font-bold">Social Link: {profile.link}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
