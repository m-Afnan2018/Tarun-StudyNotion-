
import React from 'react'
import { useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';
import { getPasswordResetToken, sendOtp } from '../../../Services/operations/authapi';

const ForgotPassword = () => {
    const [isMailSent, setIsMailSent] = useState(false);
    const [email, setEmail] = useState('');
    const { isLoading } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (event) => {
        event.preventDefault();
        dispatch(getPasswordResetToken(email, setIsMailSent));


    }

    return (
        <div>
            {isLoading ? <Loader />
                :
                <div className='text-white w-[11/12]  flex flex-col  justify-center items-center text-richblack-5'>
                    <div className='lg:w-[450px] space-y-4'>
                        <h1 className='text-3xl font-semibold'>{!isMailSent ? "Reset Your Password" : "Check email"}</h1>
                        {!isMailSent ? <p>Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p> : <p>We have sent the reset email to
                            <br /> youremailaccount@gmail.com</p>}
                        <form className='space-y-3' onSubmit={handleForm}>
                            {
                                !isMailSent && (
                                    <div className='flex flex-col  gap-2'>
                                        <label htmlFor='email'>
                                            Enter Email <sup className='text-pink-200'>*</sup>
                                        </label>
                                        <input className='w-[100%] rounded-md bg-richblack-800 text-richblack-100 py-2 px-6' type='text' placeholder='Enter Email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                                    </div>
                                )
                            }
                            <button className='bg-yellow-50 hover:scale-90 transition-all duration-200  p-3 w-full rounded-md text-richblack-800 font-medium'
                                type='submit'>
                                {isMailSent ? "Resend Email" : "Send Email"}</button>
                        </form>

                        <div className='flex flex-row gap-2 justify-start items-center'>
                            <BiLeftArrowAlt />
                            <Link to={"/login"}>Back to login</Link>
                        </div>
                    </div>
                </div>}
        </div>
    )
}






export default ForgotPassword