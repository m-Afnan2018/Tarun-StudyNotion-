import React from 'react'


const statsDetails = [
    {
        count: "5K",
        detailOf: "Active Students"
    },
    {
        count: "10+",
        detailOf: "Mentor"
    },
    {
        count: "200+",
        detailOf: "Courses"
    },
    {
        count: "50+",
        detailOf: "Awards"
    }
]

const Stats = () => {
    return (
        <div className='w-full bg-richblack-800 mt-8 flex flex-row justify-center items-center  py-8 gap-[14rem]'>
            {statsDetails.map((stat,index) => (
                <div key={index} className='flex flex-col items-center text-center '>
                    <h2 className='text-4xl text-richblack-5 font-bold'>{stat.count}</h2>
                    <p className='text-richblack-500 '>{stat.detailOf}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats