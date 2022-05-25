import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hookes/useAdmin";
import { FaAddressBook } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { MdReviews } from "react-icons/md";

import { BsFillBasketFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center ">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-center mb-16 mt-10 font-bold">
          Welcome to Dashboard {user.displayName}
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              {" "}
              <li>
                <Link to="/dashboard">
                  <BsFillCartCheckFill></BsFillCartCheckFill> My Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">
                  <MdReviews></MdReviews> Add A Review
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myprofile">
                  {" "}
                  <FaAddressBook></FaAddressBook>My Profile
                </Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/myprofile">
                  <FaAddressBook></FaAddressBook> My Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <HiUsers></HiUsers> All Users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">
                  {" "}
                  <AiFillFileAdd></AiFillFileAdd> Add Product
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allproduct">
                  <MdManageSearch></MdManageSearch> Manage Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageorder">
                  <BsFillBasketFill></BsFillBasketFill> Manage Orders
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
