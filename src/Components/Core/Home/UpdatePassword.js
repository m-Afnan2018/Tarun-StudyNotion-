import React from 'react'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../../Services/operations/authapi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {BiLeftArrowAlt} from 'react-icons/bi'

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formDetails, setFormDetails] = useState({ password: '', confirmPassword: '' });
    const  location = useLocation();
    const token = location.pathname.split('/').at(-1);

    // Try to make it with form hook or do another file promise
    const handleOnchange = ((event) => {
        setFormDetails((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    });
    const{password,confirmPassword} = formDetails;
    const handleOnSubmit = (event)=>{
            event.preventDefault();
            console.log(token);
            dispatch(resetPassword(password,confirmPassword,token,navigate));
    }

    return (

        <div className='text-richblack-200'>
            <div className='w-11/12 max-w-maxContent  mx-auto'>
                <h1 className='text-3xl font-bold text-richblack-5'>Choose  new password</h1>
                <p>Almost done. Enter your new password and youre all set.</p>
                <form className='flex flex-col gap-8' onSubmit={handleOnSubmit}>
                    <label>
                        <p>New Password <sup className='text-pink-200'>*</sup></p>
                        <div className='flex gap-4 justify-between items-center bg-richblack-800 px-4 py-2 rounded-md'>
                            <input type={showPassword ? 'text' : 'password'} name='password' className=' text-lg bg-richblack-800 rounded-md'
                                placeholder='Enter new password' value={formDetails.password} onChange={handleOnchange} />
                            <span onClick={() => { setShowPassword(!showPassword) }}>
                                {showPassword ? <AiOutlineEyeInvisible size={"30"} /> : <AiOutlineEye size={"30"} />}
                            </span>
                        </div>
                    </label>
                    <label >
                        <p>New Password <sup className='text-pink-200'>*</sup></p>
                        <div className='flex gap-4 justify-between items-center bg-richblack-800 px-4 py-2 rounded-md '>
                            <input type={showConfirmPassword ? 'text' : 'password'} name='confirmPassword' className='text-lg bg-richblack-800'
                                placeholder='Enter new password' value={formDetails.confirmPassword} onChange={handleOnchange} />
                            <span onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                {showConfirmPassword ? <AiOutlineEyeInvisible size={"30"} /> : <AiOutlineEye size={"30"} />}
                            </span>
                        </div>
                    </label>
                    <button className='bg-yellow-50 text-xl hover:scale-95 transition-all duration-200  p-3 w-full rounded-md text-richblack-800 font-medium'
                        type='submit'>
                            Reset Password
                      </button>
                      <div className='flex flex-row gap-2 justify-start items-center'>
                            <BiLeftArrowAlt />
                            <Link to={"/login"}>Back to login</Link>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword