import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { BiGitBranch } from 'react-icons/bi'

const CourseCard = ({ course, currentCard, setCurrentCard }) => {
    return (
        <div className='relative'>
            <div className={` ${currentCard === course.heading ? "bg-white  -top-5 -left-3 absolute transition-all duration-150 text-richblack-500" : "bg-richblack-800 text-richblack-400 "}
            p-5 m-2 lg:w-[340px] lg:h-[300px] `}
                onClick={() => { setCurrentCard(course.heading) }}>
                <div className='flex flex-col gap-6 h-[60%] justify-center' >
                    <h2 className={`${currentCard === course.heading ? "text-richblack-800" : "text-white"}
                font-semibold leading-4 `}>{course.heading}</h2>
                    <p className=''>{course.description}</p>
                </div>
                <div className='lg:h-[60px] border-b-2 border-richblack-400 border-dashed '>

                </div>
                <div className={` flex justify-between px-4 mt-4  ${currentCard === course.heading ? 'text-blue-500' : 'text-richblack-300'}  `}>
                    <div className='flex gap-2 items-center'>
                        <BsFillPeopleFill />
                        {course.level}
                    </div>
                    <div className='flex items-center  gap-2'>
                        <BiGitBranch />
                        {course.lessionNumber}

                    </div>
                </div>
            </div>
            <div className={`${currentCard===course.heading?'lg:w-[350px]   h-[300px] bg-yellow-50':''}`}>

            </div>
        </div>
    )
}

export default CourseCard