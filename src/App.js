import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login/Login";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import Signup from "./Components/Authentication/Signup/Signup";
import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/ParentHome/Header/Header";
import Home from "./Components/ParentHome/Home/Home";
import Footer from "./Components/Share/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Myorder from "./Components/Dashboard/Myorder";
import AddaReview from "./Components/Dashboard/AddaReview";
import MyProfile from "./Components/Dashboard/MyProfile";
import Allusers from "./Components/Dashboard/Allusers";
import RequireAdmin from "./Components/Authentication/RequireAuth/RequireAdmin";
import Addproduct from "./Components/Dashboard/Addproduct";
import Payment from "./Components/Dashboard/Payment";
import Allproducts from "./Components/Allproducts/Allproducts";
import EditMyprofile from "./Components/Dashboard/EditMyprofile";
import FourOfour from "./Components/Share/404/FourOfour";
import Blog from "./Components/Blogs/Blog";
import Manageorders from "./Components/Dashboard/Manageorders";

function App() {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {/* nasted route start */}
          <Route index element={<Myorder></Myorder>}></Route>
          <Route path="addreview" element={<AddaReview></AddaReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="editmyprofile"
            element={<EditMyprofile></EditMyprofile>}
          ></Route>
          <Route path="addproduct" element={<Addproduct></Addproduct>}></Route>
          <Route
            path="allproduct"
            element={<Allproducts></Allproducts>}
          ></Route>
          <Route path="payment/:payid" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Allusers></Allusers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <Manageorders></Manageorders>
              </RequireAdmin>
            }
          ></Route>

          {/* nasted route end */}
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/chaekout/:productid"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog></Blog>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<FourOfour></FourOfour>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
