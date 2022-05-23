import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
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
        <Link className="font-semibold text-xl " to="/">
          Home
        </Link>
      </li>

      <li>
        {user && (
          <>
            <Link className="font-semibold text-xl " to="/dashboard">
              Dashboard
            </Link>
          </>
        )}
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            <p className="font-semibold text-xl text-red-600">Sign Out</p>
          </button>
        ) : (
          <Link className="font-semibold text-xl" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div class="navbar bg-base-300">
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
            {menu}
          </ul>
        </div>
        <Link as={Link} to="/" class=" text-xl">
          <span className="logo"> SpaceDesk Mechanical</span>
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
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
        {/* <h1 className="font-bold text-xl mr-14">User: {user?.displayName}</h1> */}
      </div>
    </div>
  );
};

export default Header;
