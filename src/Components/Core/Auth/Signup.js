import React, { useState } from 'react'
import Template from './Template'
import signupImage from '../../../assets/Images/signup.webp'
import InstrucorAuth from "../../../assets/Images/InstructorAuth.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import CTAButton from '../Home/CTAButton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSignup } from '../../../redux/slices/authSlice'
import { sendOtp } from '../../../Services/operations/authapi'
import Loader from '../Common/Loader'
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupDetails, setSignupDetails] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: ""
    , confirmPassword: "", accountType: "Student"
  });
  const {isLoading} = useSelector((state) => state.auth)
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);


  const handleOnchange = (event) => {
    setSignupDetails((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value
    }));
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //  Adding sugnup details  to state in slice
    dispatch(setSignup(signupDetails));
    dispatch(sendOtp(signupDetails.email, navigate));
    // Sending mail for email verification
  }
  return (
    <div className=''>
      {isLoading ? <Loader/> :
        <div className='w-11/12 max-w-maxContent mx-auto'>

          <Template
            heading={"Join the millions learning to code with StudyNotion for free"}
            image={signupImage}
            formData={
              <form onSubmit={handleOnSubmit}>
                <div className='flex flex-col w-[80%] gap-4 font-medium'>

                  <div className='flex gap-4'>
                    <div>
                      <label >FirstName <sup className='text-pink-300'>*</sup></label>
                      <input name='firstName' required className='bg-richblack-800 p-3 rounded-lg '
                        placeholder='Enter first name' value={signupDetails.firstname} onChange={handleOnchange} />
                    </div>
                    <div>
                      <label >Last Name <sup className='text-pink-300'>*</sup></label>
                      <input name='lastName' required className='bg-richblack-800 p-3 rounded-lg'
                        placeholder='Enter last name' value={signupDetails.lastName} onChange={handleOnchange} />
                    </div>
                  </div>

                  <div>
                    <label  >Email Address<sup className='text-pink-300'>*</sup></label><br />
                    <input name='email' required className='bg-richblack-800 p-3 rounded-lg w-[96%]' type='text'
                      placeholder='Enter email address' value={signupDetails.email} onChange={handleOnchange}></input>
                  </div>

                  <div>
                    <label  >Contact Number<sup className='text-pink-300'>*</sup></label><br />
                    <input name='phone' required className='bg-richblack-800 p-3 rounded-lg w-[96%]' type='text'
                      placeholder='Enter email address' value={signupDetails.phone} onChange={handleOnchange}></input>

                  </div>

                  <div className='flex gap-4 '>
                    <div className=''>
                      <label >Password <sup className='text-pink-300'>*</sup></label>

                      <div className='flex  items-center   rounded-lg p-3  bg-richblack-800'>
                        <input name='password' required type={`${showPassword ? 'text' : 'password'}`} className='bg-richblack-800  rounded-lg b-none focus:outline-none'
                          placeholder='Enter Password' value={signupDetails.password} onChange={handleOnchange} />
                        <span onClick={()=>{setShowPassword(!showPassword)}}>
                          {showPassword ? <AiOutlineEyeInvisible className='cursor-pointer text-2xl' /> : <AiOutlineEye className='cursor-pointer text-2xl' />}
                        </span>

                      </div>
                    </div>
                    <div>
                      <label >Confirm Password <sup className='text-pink-300'>*</sup></label>
                      <div className='flex  items-center p-3 rounded-lg   bg-richblack-800'>
                        <input name='confirmPassword' required type={`${showConfirmPassword?"text":"password"}`} className='bg-richblack-800 outline-none   rounded-lg'
                          placeholder='Confirm Password' value={signupDetails.confirmPassword} onChange={handleOnchange} />
                        <span onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}>
                          {showConfirmPassword ? <AiOutlineEyeInvisible className='cursor-pointer text-2xl' /> : <AiOutlineEye className='cursor-pointer text-2xl' />}

                        </span>
                      </div>
                    </div>
                  </div>
                  <button className='bg-yellow-50 text-xl hover:scale-95 transition-all duration-200  p-3 w-full rounded-md text-richblack-800 font-medium'
                    type='submit'>
                    Signup
                  </button>
                </div>
              </form>
            } />



        </div>}
    </div>
  )
}

export default Signup