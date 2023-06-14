import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { Link, useNavigate } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import {BsArrowCounterclockwise} from "react-icons/bs"
import { toast } from 'react-hot-toast'
import { sendOtp, signUp } from '../../../Services/operations/authapi'
import Loader from '../Common/Loader'
const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const { signupData } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth)

    const resendMail = ()=>{
        const {email} = signupData;
        dispatch(sendOtp(email, navigate));
    }

    const handleForm = (event) => {
        event.preventDefault();
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmPassword,
            accountType
        } = signupData;
        console.log("at verify email", signupData);

        if (password !== confirmPassword) {
            toast.error('Password Dont Match')
        };

        dispatch(signUp(
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmPassword,
            accountType,
            otp,
            navigate
        ))

           

    }

    return (
        <div>
            {isLoading ? <Loader /> :
                <div className='text-white  '>
                    <div className='text-richblack-200'>
                        <div className='w-11/12 max-w-maxContent  mx-auto flex flex-col gap-8'>

                            <form onSubmit={handleForm} className='space-y-6'>
                                <h1 className='text-3xl font-bold text-richblack-5'>Verify email</h1>
                                <p>A verification code has been sent to you. Enter the code below.</p>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator=" - "
                                    renderInput={(props) => (
                                        <input type='text'
                                            {...props}
                                            placeholder=""
                                            style={{
                                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                            }}
                                            className="w-[48px] lg:w-[60px] mx-0.5 space-x-8 border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                                        />
                                    )} />
                                <button className='bg-yellow-50 text-xl hover:scale-95 transition-all duration-200  p-3 w-full rounded-md text-richblack-800 font-medium'
                                    type='submit'>
                                    Verify Email
                                </button>

                            </form>

                            <div className='flex flex-row gap-2 justify-between items-center'>
                                <div className='flex gap-2 items-center '>
                                    <BiLeftArrowAlt />
                                    <Link to={"/login"}>Back to login</Link>
                                </div>
                                <div className='text-[#47A5C5]  flex gap-2 items-center'>
                                    <BsArrowCounterclockwise size={"20"} />
                                    <p className='cursor-pointer' onClick={resendMail}>Resend it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default VerifyEmail