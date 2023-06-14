import React, { useEffect } from 'react'
import countryCodes from '../../../data/countrycode.json'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../../../Services/apiConnector'
import { authEndPoints, profileEndPoints } from '../../../Services/apis'
const ContactForm = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const submitHandler = async (data) => {
        console.log("Logging Data ",data);
        const {firstName,lastName,email,message,phone}  = data;
        console.log("FeedBack API",profileEndPoints.FEEDBACK_API);
        console.log("Auth API",authEndPoints.SEND_OTP_API);
        const response = await apiConnector("POST",'http://localhost:4000/api/v1/profile/sendFeedback',{
            firstName,
            lastName,
            email,
            phone,
            message 
        });

        console.log("FEEDBACK_FORM_API_RESPONSE.....",response);
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstName: "",
                lastName: "",
                message: "",
                phone: ""

            })
        }
    }, [reset,isSubmitSuccessful]);

    return (
        <div className=' flex flex-col justify-center mb-6 text-richblack-5  items-center gap-6 py-6'>
            <form className='space-y-6 ml-[8rem]' onSubmit={handleSubmit(submitHandler)}>
                <div className='flex gap-4 justify-center items-center '>
                    <div className='w-[50%]'>
                        <label htmlFor='firstName'>
                            First Name <br />
                            <input type='text' {...register("firstName")} className='p-3  w-full rounded-md bg-richblack-800' name='firstName' placeholder='Enter FirstName' />
                        </label>

                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor='lastName'>
                            Last Name <br />
                            <input type='text' {...register("lastName")} className='p-3  w-full rounded-md bg-richblack-800' name='lastName' placeholder='Enter LastName' />
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor='email'>
                        Email<br />
                        <input type='text' {...register("email")} className='p-3 w-full rounded-md bg-richblack-800' name='email' placeholder='Enter Email' />
                    </label>
                </div>

                <div>
                    <label htmlFor='phone'>
                        Phone No
                    </label>
                    <div className='flex text-richblack-200 gap-4'>

                        <select name='code' {...register("code")} className='bg-richblack-800 text-center w-[30%]  p-3 rounded-md'>
                            {countryCodes.map((country, index) => (
                                <option key={index}>{country.code}-{country.country}</option>
                            ))}

                        </select>
                        {/* css issue here */}
                        <input type='text' {...register("phone")} className=' w-[75%] bg-richblack-800 rounded-md p-2' name='phone' placeholder='1234567890' />

                    </div>

                </div>

                <div>
                    <label htmlFor='message' >
                        Message
                    </label>
                    <textarea rows={5} {...register("message")} placeholder='Enter Message ' className='bg-richblack-800 p-4 rounded-md w-full' name='message' />

                </div>

                <button type='submit'>
                    Send Message
                </button>

            </form>
        </div>
    )
}

export default ContactForm


