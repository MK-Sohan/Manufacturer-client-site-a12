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
function App() {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
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
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
