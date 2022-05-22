import React from "react";

const SingleUser = (user) => {
  console.log(user);

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
        {user?.user.email}
        <br />
      </td>

      <th>
        <button class="btn btn-primary btn-xs  bg-slate-800 text-whitebtn-xs">
          Make Admin
        </button>
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
