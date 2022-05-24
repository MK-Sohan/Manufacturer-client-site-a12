import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hookes/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center ">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-center mb-16 mt-10">
          Welcome to Dashboard
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
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">Add A Review</Link>
              </li>
              <li>
                <Link to="/dashboard/myprofile">My Profile</Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/myprofile">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/allproduct">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
