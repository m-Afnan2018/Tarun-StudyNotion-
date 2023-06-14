import React from 'react'
import Highlight from '../Components/Core/Highlight'

import Banner1 from '../assets/Images/aboutus1.webp'
import Banner2 from '../assets/Images/aboutus2.webp'
import Banner3 from '../assets/Images/aboutus3.webp'
import storyImage from '../assets/Images/FoundingStory.png'
import Quote from '../Components/Core/About/Quote'
import Stats from '../Components/Core/About/Stats'
import LearningGrid from '../Components/Core/About/LearningGrid'
import ContactForm from '../Components/Core/Common/ContactForm'
import Footer from '../Components/Core/Footer'

const AboutUs = () => {
    return (
        <div className='text-richblack-5'>
            <div className=' mb-24 pt-16  w-[11/12] mx-auto bg-richblack-800'>
                {/* Section 1 */}
                <section>
                    <div className='flex flex-col gap-4 text-richblack-5'>
                        <div className='text-center space-y-4'>
                            <h4 className='text-richblack-300'>About Us</h4>
                            <h1 className='text-4xl font-bold'>Driving Innovation in Online Education for a <br /><Highlight text={"Brighter Future"} direction={"b"}
                                color={
                                    {
                                        first: "#1FA2FF",
                                        second: "#12D8FA",
                                        third: "#A6FFCB"
                                    }
                                } /></h1>
                            <p className='w-[55%] text-richblack-300 mx-auto'>Studynotion is at the forefront of driving innovation in online education.
                                We're passionate about creating a brighter future by offering cutting-edge courses,
                                leveraging emerging technologies, and nurturing a <br />vibrant learning community.</p>
                        </div>
                        <div className='flex justify-center gap-x-4 translate-y-[20%]'>
                            <img src={Banner1} alt='aboutus1'/>
                            <img src={Banner2} alt='aboutus2'/>
                            <img src={Banner3} alt='aboutus3'/>
                        </div>
                    </div>
                </section>

            </div>
            {/* Section 2 */}

            <div className='pt-8 flex flex-col  gap-8'>
                <section>
                    <div >
                        <Quote />
                    </div>
                    {/* Finding Story Section */}
                    <div className='w-[11/12] w-[90%] mx-auto flex flex-col justify-center items-center'>
                        <div className='flex  lg:gap-24 mt-[6rem] items-center  justify-center'>
                            {/* Left Section */}
                            <div className='w-[40%] text-richblack-300 space-y-4'>

                                <h2 className='text-4xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]
                                text-transparent bg-clip-text font-semibold'>Our Founding Story </h2>
                                <p>Our e-learning platform was born out of a shared vision and passion for transforming education.
                                    It all began with a group of educators, technologists, and lifelong learners who recognized
                                    the need for accessible, flexible,and high-quality learning opportunities in a
                                    rapidly evolving digital world.
                                </p>
                                <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems.
                                    We believed that education should not be confined to the walls of a classroom or restricted by geographical
                                    boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of
                                    life to unlock their full potential.
                                </p>
                            </div>
                            {/* Right Section */}
                            <div>
                                <img src={storyImage} alt='ourfindingstory'/>
                            </div>
                        </div>
                        {/* Vision and Mission */}
                        <div className='flex lg:gap-24 mt-[6rem] items-center  justify-center'>
                            <div className='w-[40%] text-richblack-300 space-y-4'>
                                <h2 className='text-4xl bg-gradient-to-r from-[#E65C00]  to-[#F9D423]
                                text-transparent bg-clip-text font-semibold'>Our Vision </h2>
                                <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn.
                                    Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines
                                    cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                                </p>
                            </div>
                            <div className='w-[40%] text-richblack-300 space-y-4'>
                                <h2 className='text-4xl bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA]  to-[#A6FFCB]
                                text-transparent bg-clip-text font-semibold'>Our Mission </h2>
                                <p>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners,
                                    where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives
                                    in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums,
                                    live sessions, and networking opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Stats />
                </section>
            </div>

            {/* Section 3  */}
            <section>

                <div className='w-[80%] mx-auto'>
                    <LearningGrid />
                </div>

            </section>

            {/* Section 4 */}
            <div>
                <section>
                    <div className='flex flex-col gap-4 items-center  text-richblack-5'>
                        <h2 className='text-4xl'>Get in touch</h2>
                        <p className='text-richblack-300'>We’d love to here for you, Please fill out this form.</p>
                    </div>
                    <ContactForm />
                </section>
            </div>
            <Footer />
        </div>

    )
}

export default AboutUs