import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/ParentHome/Header/Header";
import Home from "./Components/ParentHome/Home/Home";
import Footer from "./Components/Share/Footer";

function App() {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
