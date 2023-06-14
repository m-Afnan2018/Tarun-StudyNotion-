import React, { useState } from 'react'
import Template from './Template'
import loginImage from '../../../assets/Images/login.webp'
import InstrucorAuth from "../../../assets/Images/InstructorAuth.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../Services/operations/authapi'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Common/Loader'
const Login = () => {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });
  const [showPassword,setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }
  const {isLoading} = useSelector((state) => state.auth)

  const navigate = useNavigate();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formDetails.email, formDetails.password, navigate));
  }

  return (
    isLoading ? <Loader /> :
      <div className='w-full'>
        <div className='w-11/12 max-w-maxContent mx-auto'>
          <Template
            heading={"Welcome Back"}
            image={loginImage}
            formData={
              <form onSubmit={handleOnSubmit}>
                <div className='flex flex-col w-[80%] gap-4 font-medium'>
                  <label htmlFor="email" >Email Address<sup className='text-pink-300'>*</sup></label>
                  <input name='email' className='bg-richblack-800 p-3 rounded-lg' type='text'
                    placeholder='Enter email address' value={formDetails.email} onChange={handleOnChange}></input>
                  <label htmlFor="password">Password<sup className='text-pink-300'>*</sup></label>
                  <div className='flex justify-between items-center   rounded-lg p-3 bg-richblack-800 '>
                    <input name='password' className='bg-richblack-800' onChange={handleOnChange} type={`${showPassword ? 'text' : 'password'}`} placeholder='Enter Password' value={formDetails.passoword} />
                   <span onClick={()=>{setShowPassword(!showPassword)}}>
                   {showPassword ? <AiOutlineEyeInvisible className='cursor-pointer text-2xl' /> : <AiOutlineEye className='cursor-pointer text-2xl' />}
                   </span>
                  </div>
                  <div className='text-right'>
                    <Link to={'/forgotPassword'} className=' text-[#47A5C5] text-sm'>Forgot password</Link>
                  </div>
                  <button className='bg-yellow-50 text-xl hover:scale-95 transition-all duration-200  p-3 w-full rounded-md text-richblack-800 font-medium'
                    type='submit'>
                    Login
                  </button>
                </div>
              </form>
            } />
        </div>
      </div>
  )
}

export default Login