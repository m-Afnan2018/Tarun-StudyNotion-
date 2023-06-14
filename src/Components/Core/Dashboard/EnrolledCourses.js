import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserEnrolledCourse } from '../../../Services/operations/profileapi';
import { useEffect } from 'react';

const EnrolledCourses = () => {

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const { token } = useSelector((state) => state.auth);

    // Backend Call to get student enrolled coursess

    const getEnrolledCourses = async () => {
        try {
            const response = await getUserEnrolledCourse(token);
            // setEnrolledCourses(response);
        } catch (error) {
            console.log("ERROR WHILE CALLING THE METHOD VIA API CONNECTOR", error);
        }
    }

    useEffect(() => {
        getEnrolledCourses();
    }, []);
    return (
        <div className=''>
            <div className='flex flex-col  gap-4'>
                <h2 className='text-3xl text-richblack-5 font-semibold'>Enrolled Courses</h2>
                {!enrolledCourses.length ? <p className='text-richblack-300'>You Havent Enrolled into any course yet</p> :
                    <div className='flex flex-col gap-4 justify-between items-center'>
                        <div className='flex'>
                            <p>Course Name</p>
                            <p>Duration</p>
                            <p>Progress</p>
                        </div>
                        {enrolledCourses.map((course) => (
                            <div>
                                <div className='flex'>
                                    <img src={course.thumbnail} />
                                    <div>
                                        <p>{course.name}</p>
                                        <p>{course.description}</p>

                                    </div>
                                </div>

                                <div className='flex'>
                                    <p>{course.duartion}</p>
                                    <ProgressBar completed={60} />;
                                </div>

                            </div>
                        ))}
                    </div>}
            </div>
        </div>
    )
}

export default EnrolledCourses