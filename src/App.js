import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Core/Auth/Login";
import Signup from "./Components/Core/Auth/Signup";
import Navbar from "./Components/Core/Home/Navbar";
import ForgotPassword from "./Components/Core/Home/ForgotPassword";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="w-screen min-h-screen z-0 overflow-x-hidden flex flex-col items-center font-inter justify-center bg-richblack-900">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
