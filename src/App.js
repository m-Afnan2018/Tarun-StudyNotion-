import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Core/Auth/Login";
import Signup from "./Components/Core/Auth/Signup";
import Navbar from "./Components/Core/Home/Navbar";
import ForgotPassword from "./Components/Core/Home/ForgotPassword";
import UpdatePassword from "./Components/Core/Home/UpdatePassword";
import VerifyEmail from "./Components/Core/Auth/VerifyEmail";
import Dashboard from "./Components/Core/Profile/Dashboard";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import MyProfile from "./Components/Core/Dashboard/MyProfile";
import Settings from "./Components/Core/Dashboard/Settings";
import EnrolledCourses from "./Components/Core/Dashboard/EnrolledCourses";
import Cart from "./Components/Core/Dashboard/Cart";
import { useSelector } from "react-redux";
import AddCourse from "./Components/Core/Dashboard/AddCourse";

function App() {
  
  const {user} = useSelector((state)=>state.auth);

  return (
    
    <div>
      <Navbar />
      <div className="w-screen  min-h-screen z-0 overflow-x-hidden flex flex-col items-center font-inter justify-center bg-richblack-900">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/reset-Password/:id" element={<UpdatePassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route element={<Dashboard />} >

            <Route path="/dashboard/my-profile" element={<MyProfile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />} />
            <Route path="/dashboard/cart" element={<Cart />} />

            <Route path="/dashboard/add-course" element={<AddCourse/>}/>

          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
