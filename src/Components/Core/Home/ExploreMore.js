import React, { useState } from 'react'

import { HomePageExplore } from '../../../data/homepage-explore'
import Highlight from '../Highlight';
import CourseCard from './CourseCard';

const tabs = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]



const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

   const setTab=(value)=>{
        setCurrentTab(value);
        const filteredCourses = HomePageExplore.filter((course)=>{
            return course.tag===value
        });
        setCourses(filteredCourses[0].courses);
        setCurrentCard(filteredCourses[0].courses[0].heading)
    }
    return (
        <div  className='relative'>
            <div className='text-center flex flex-col gap-4 my-4'>
                <h2 className='text-4xl font-bold'>Unlock the <Highlight text={"Power of Code"} direction={'b'} /></h2>
                <h4 className='capitalize leading-4 text-richblack-300 font-medium'>Learn to build anything you can imagine</h4>
            </div>
            <div className='flex justify-center lg:w-[55%] mx-auto gap-2 items-center bg-richblack-800 rounded-full p-2 my-4'>
                {tabs.map((tab,index)=>(
                    <div className={`${tab===currentTab?"bg-richblack-900  text-richblack-5":" text-pure-greys-5"} 
                    rounded-full hover:cursor-pointer hover:bg-richblack-900 px-4 py-2 transition-all duration-200`} key={index}
                    onClick={()=>{setTab(tab)}}>
                        {tab}
                    </div>
                ))}
            </div>
            <div className='flex justify-center gap-8 items-center lg:translate-y-[80px]'>
                {courses.map((course,index)=>(
                    <CourseCard 
                        key={index}
                        course={course}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExploreMore