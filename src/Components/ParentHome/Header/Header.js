import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { FaSignOutAlt } from "react-icons/fa";
import { RiLoginBoxFill, RiDashboardFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
// import { ImBlog } from "react-icons/im";
// import { ImProfile } from "react-icons/im";

import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const logout = () => {
    signOut(auth);
  };

  const menu = (
    <>
      <li>
        <Link className="font-semibold text-xl text-white" to="/">
          <AiFillHome></AiFillHome> Home
        </Link>
      </li>
      {/* <li>
        <Link className="font-semibold text-xl text-white" to="/blog">
          <ImBlog></ImBlog> Blog
        </Link>
      </li> */}
      {/* <li>
        <Link className="font-semibold text-xl text-white" to="/portfolio">
          <ImProfile></ImProfile> My Portfolio
        </Link>
      </li> */}

      <li>
        {user && (
          <>
            <Link className="font-semibold text-xl text-white" to="/dashboard">
              <RiDashboardFill></RiDashboardFill> Dashboard
            </Link>
          </>
        )}
      </li>
      <li>
        {user ? (
          <>
            <p onClick={logout} className="font-semibold text-xl text-red-600 ">
              <FaSignOutAlt></FaSignOutAlt> Sign Out
            </p>
          </>
        ) : (
          <Link className="font-semibold text-xl text-success" to="/login">
            <RiLoginBoxFill></RiLoginBoxFill> Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div class="navbar bg-base-300 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div data-aos="zoom-in">{menu}</div>
          </ul>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Link as={Link} to="/" class=" text-xl">
            <span className="logo"> SpaceDesk Mechanical</span>
          </Link>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        class="navbar-center hidden lg:flex"
      >
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div class="navbar-end">
        <label for="my-drawer-2" class=" drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
