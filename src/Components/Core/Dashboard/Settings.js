import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CTAButton from '../Home/CTAButton';
import { RiDeleteBin6Line } from 'react-icons/ri'
import IconButton from '../Common/IconButton';
import { apiConnector } from '../../../Services/apiConnector';
import { changeDisplayPicture } from '../../../Services/operations/profileapi';
const Settings = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    console.log(user.image);
    const inputRef = useRef(null);
    const onChangeHandler = () => {
        inputRef.current.click();
    }
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        console.log(file);
        const response = await dispatch(changeDisplayPicture(file, token, user));
        console.log(response);
    }
    return (
        <div className='flex w-full flex-col gap-6  my-4'>
            <h2 className='text-3xl font-semiBold -ml-12'>Edit Profile</h2>

            <div className='flex flex-col gap-8 '>
                <div className='flex gap-8 bg-richblack-800 p-6 rounded-md'>
                        <img src={user.image} className='lg:w-[80px] lg:h-[80px] rounded-full' />
                    <div className='space-y-2'>
                        <p>Change Profile Picture</p>
                        <div className='flex gap-4'>
                            <IconButton text={"Change"} active={true} onclick={onChangeHandler} />
                            <CTAButton text={"Remove"} active={false} />
                            <input type='file' className='invisible' ref={inputRef} onChange={handleFileChange} />
                        </div>
                    </div>
                </div>

                <div className='space-y-8 '>

                    <h2>Profile Information</h2>
                    <form>
                        <div className='bg-richblack-800  p-6 rounded-md w-full'>
                            {/* Display Name and Profession */}
                            <div className='flex justify-between mt-4 gap-[6rem]'>
                                <div className='w-[60%]'>
                                    <label htmlFor='Name'>
                                        Display Name
                                    </label><br />
                                    <input type='text' className='bg-richblack-700  w-full p-3 rounded-md' value={`${user.firstName} ${user.lastName}`} />
                                </div>
                                <div className='w-[40%]'>
                                    <label htmlFor='Name'>
                                        Profession
                                    </label><br />
                                    <select className='bg-richblack-700 w-full p-3 rounded-md'>
                                        <option className='p-4  bg-richblack-800'>Developer</option>
                                        <option className='p-4  bg-richblack-800'>Tester</option>
                                        <option className='p-4  bg-richblack-800'>Designer</option>
                                    </select>
                                </div>
                            </div>
                            {/* DOB And Gender */}
                            <div>
                                <div className='flex justify-between gap-4 mt-4 '>
                                    <div className='w-[60%]'>
                                        <label htmlFor='Name'>
                                            Date of birth
                                        </label><br />
                                        <input type='date' className='bg-richblack-700 w-[85%] p-3 rounded-md' value={`${user.firstName} ${user.lastName}`} />
                                    </div>
                                    <div className='w-[35%]'>
                                        <label htmlFor='Name'>
                                            Gender <sup className='text-pink-200'>*</sup>
                                        </label><br />
                                        <div className='flex gap-2 bg-richblack-600 p-3 rounded-md'>
                                            <input type='radio' name='Gender' />Male
                                            <input type='radio' name='Gender' />Female
                                            <input type='radio' name='Gender' />Other
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Contact and About  */}

                            <div className='bg-richblack-800'>
                                <div className='flex justify-between gap-4 mt-4 w-full '>
                                    <div >
                                        <label htmlFor='Name'>
                                            Contact <sup className='text-pink-200'>*</sup>
                                        </label><br />
                                        <div className='flex gap-4'>
                                            <select className=' bg-richblack-600 p-3 rounded-md'>
                                                <option>+91</option>
                                            </select>
                                            <input type='text' className='bg-richblack-700 p-3 rounded-md' placeholder='9876543210' />
                                        </div>

                                    </div>
                                    <div className=''>
                                        <label htmlFor='Name'>
                                            About
                                        </label><br />
                                        <input type='text' className='bg-richblack-700 p-3 rounded-md' placeholder='About Details' />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-richblack-800 mt-4 p-6 flex justify-between gap-4 rounded-md w-full'>
                            <div className='w-[55%]'>
                                <label htmlFor='Name'>
                                    Current Password <sup className='text-pink-200'>*</sup>
                                </label><br />
                                <input type='text' className='bg-richblack-700 p-3 w-full rounded-md' placeholder='Current Password' />
                            </div>
                            <div className='w-[45%]'>
                                <label htmlFor='Name'>
                                    Change Password <sup className='text-pink-200'>*</sup>
                                </label><br />
                                <input type='text' className='bg-richblack-700 p-3 w-full rounded-md' placeholder='Change Password' />

                            </div>
                        </div>

                    </form>



                </div>
                <div className='mt-8 flex bg-pink-700 p-4 rounded-md justify-center items-start gap-8'>

                    <div className='text-pink-200 bg-pink-800 p-4 rounded-full'>
                        <RiDeleteBin6Line size={20} />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-pink-5 text-xl  font-semibold '>Delete Account</h2>
                        <p className='text-sm text-pink-25'>Would you like to delete account?</p>
                        <p className='text-sm text-pink-25'>This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
                        <p className='text-pink-300 font-bold cursor-pointer hover:text-pink-500 transition-all-duration-200'>I want to delete my account.</p>
                    </div>
                </div>
                <div className='flex justify-end gap-6'>
                    <CTAButton text={"Cancel"} active={false} />
                    <CTAButton text={"Save"} active={true} />
                </div>
            </div>
        </div>
    )
}

export default Settings