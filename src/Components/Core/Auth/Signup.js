import React, { useState } from 'react'
import Template from './Template'
import signupImage from '../../../assets/Images/signup.webp'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import CTAButton from '../Home/CTAButton'
const Signup = () => {
  const [signupData, setSignupData] = useState({
    firstname: "", lastName: "", email: "", phone: "", password: ""
    , cnfPassword: "", isVisible: false
  });

  return (
    <div className='w-full'>
      <div className='w-11/12 max-w-maxContent mx-auto'>

        <Template
          heading={"Join the millions learning to code with StudyNotion for free"}
          image={signupImage}
          formData={
            <form >
              <div className='flex flex-col w-[80%] gap-4 font-medium'>

                <div className='flex'>
                  <div>
                    <label htmlFor='firstname'>FirstName <sup className='text-pink-300'>*</sup></label>
                    <input name='firstName' className='bg-richblack-800 p-3 rounded-lg '
                      placeholder='Enter first name' value={signupData.firstname} />
                  </div>
                  <div>
                    <label htmlFor='firstname'>Last Name <sup className='text-pink-300'>*</sup></label>
                    <input name='lastName' className='bg-richblack-800 p-3 rounded-lg'
                      placeholder='Enter last name' value={signupData.lastName} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" >Email Address<sup className='text-pink-300'>*</sup></label><br />
                  <input name='email' className='bg-richblack-800 p-3 rounded-lg w-[96%]' type='text'
                    placeholder='Enter email address' value={signupData.email}></input>
                </div>

                <div>
                  <label htmlFor="email" >Contact Number<sup className='text-pink-300'>*</sup></label><br />
                  <input name='email' className='bg-richblack-800 p-3 rounded-lg w-[96%]' type='text'
                    placeholder='Enter email address' value={signupData.email}></input>

                </div>

                <div className='flex gap-4 '>
                  <div className=''>
                    <label htmlFor='firstname'>Password <sup className='text-pink-300'>*</sup></label>

                    <div className='flex  items-center   rounded-lg p-3  bg-richblack-800'>
                      <input name='firstName' className='bg-richblack-800  rounded-lg b-none focus:outline-none'
                        placeholder='Enter first name' value={signupData.password} />
                      <div className=''>
                        {signupData.isVisible ? <AiOutlineEyeInvisible className='cursor-pointer text-2xl' /> : <AiOutlineEye className='cursor-pointer text-2xl' />}
                      </div>

                    </div>
                  </div>
                  <div>
                    <label htmlFor='firstname'>Confirm Password <sup className='text-pink-300'>*</sup></label>
                    <div className='flex  items-center p-3 rounded-lg   bg-richblack-800'>
                      <input name='lastName' className='bg-richblack-800 outline-none   rounded-lg'
                        placeholder='Enter last name' value={signupData.cnfPassword} />
                      <div>
                        {signupData.isVisible ? <AiOutlineEyeInvisible className='cursor-pointer text-2xl' /> : <AiOutlineEye className='cursor-pointer text-2xl' />}

                      </div>
                    </div>
                  </div>
                </div>
                <CTAButton text={"Signup"} active={true} />
              </div>
            </form>
          } />



      </div>
    </div>
  )
}

export default Signup