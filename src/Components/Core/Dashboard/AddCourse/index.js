import React from 'react'
import { Link } from 'react-router-dom'
import RenderSteps from './RenderSteps'
import RenderCourseForm from './RenderCourseForm'



const AddCourse = () => {
    return (
        <div>
            <Link>Back to dashboard</Link>
            <div className='flex gap-[14rem]  '>
                <div className='flex flex-col gap-8'>
                    <div className='flex gap-4 justify-center items-center'>
                        <RenderSteps />
                    </div>
                    <RenderCourseForm/>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Course Upload Tips</h2>
                    <ul>
                        <li>Set the Course Price option or make it free.</li>
                        <li>Standard size for the course thumbnail is 1024x576.</li>
                        <li>Video section controls the course overview video.</li>
                        <li>Course Builder is where you create & organize a course.</li>
                        <li>Add Topics in the Course Builder section to create lessons</li>
                        <li>Information from the Additional Data section shows up on the course single page.</li>
                        <li>Make Announcements to notify any important</li>
                        <li>Notes to all enrolled students at once.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AddCourse