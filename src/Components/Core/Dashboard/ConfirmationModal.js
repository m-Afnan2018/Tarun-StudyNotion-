import React from 'react'
import IconButton from '../Common/IconButton'

const ConfirmationModal = ({ data }) => {
    const{text, subtext, btn1title, btn2title, btn1onclick, btn2onclick} = data;
    console.log("called inside confirmation model")
    return (
        <div className='text-white absolute bg-richblack-800 border-2 border-richblack-5 rounded-lg px-4 py-8 top-[14rem] left-[34rem]  flex flex-col gap-4 items-start justify-start'>
            <h2 className='text-3xl font-semibold'>{text}</h2>
            <p className='text-lg'>{subtext}</p>
            <div className='flex gap-6 justify-start items-center'>
                <IconButton text={btn1title} onclick={()=>{btn1onclick()}} />
                <IconButton text={btn2title} onclick={btn2onclick} />
            </div>
        </div>
    )
}

export default ConfirmationModal