import React from 'react'
import { useState } from 'react'

import frame from '../../../assets/Images/frame.png'
const Tabs = [
    "Student",
    "Instructor"
]

const Template = ({ heading, image ,formData}) => {
    const [currentTab, setCurrentTab] = useState(Tabs[0]);
    return (
        <div className='w-11/12 max-w-maxContent mx-auto text-richblack-5 flex items-center   my-[10%] gap-[4rem] '>
            {/* Left Section */}
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold leading-6'>{heading}</h2>
                <p className='lg:text-[18px] '>Build skills for today, tomorrow, and beyond. <span className='font-edu-sa text-[#47A5C5]'>Education to future-proof your career.</span></p>
                <div className=' w-[40%] font-md rounded-full text-richblack-100 flex justify-center items-center gap-1 bg-richblack-800 lg:px-[16px] lg:py-[3px]'>
                    {Tabs.map((tab,index) => (
                        <p key={index} className={`${tab === currentTab ? "bg-richblack-900 text-richblack-5" : "bg-richblack800"} transition-all duration-200 px-6 py-2 hover:cursor-pointer  rounded-full`} onClick={() => { setCurrentTab(tab) }}>{tab}</p>
                    ))}
                </div>
                {/* Form Details */}
                {formData}

            </div>
            {/* Right Section */}
            <div className='relative'>
               <img src={image} alt='loginImage' className='absolute -top-4 -left-4 '/>
               <img src={frame} alt='frame' />
            </div>
        </div>
    )
}

export default Template
