import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user, refetch }) => {
  const { email, role } = user;
  const handleMakeadmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Sorry !! Faild to make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div>
            <div class="font-bold"></div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
      </td>

      <th>
        {role !== "admin" && (
          <button
            onClick={handleMakeadmin}
            class="btn btn-primary btn-xs  bg-slate-800 text-whitebtn-xs"
          >
            Make Admin
          </button>
        )}
      </th>
      <th>
        <button class="  btn btn-error text-slate-600 btn-xs">
          Remove user
        </button>
      </th>
    </tr>
  );
};

export default SingleUser;
