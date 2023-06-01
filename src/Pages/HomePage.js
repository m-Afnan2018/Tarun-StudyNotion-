import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Highlight from '../Components/Core/Highlight'
import CTAButton from '../Components/Core/Home/CTAButton'
import Banner from '../assets/Images/banner.mp4'
import { Link } from 'react-router-dom'
import CodeBlocks from '../Components/Core/Home/CodeBlocks'



import knowYourProgress from '../assets/Images/Know_your_progress.svg'
import compareWithOthers from '../assets/Images/Compare_with_others.svg'
import planYourLessons from '../assets/Images/Plan_your_lessons.svg'

import timelineImage from '../assets/Images/TimelineImage.png'
import keyHighlights from '../data/keyHighLights'

import instructorImage from '../assets/Images/Instructor.png'
import ExploreMore from '../Components/Core/Home/ExploreMore'
import Footer from '../Components/Core/Footer'

const HomePage = () => {
    return (
        <div className='bg-richblack-900 mx-auto text-white min-h-screen min-w-screen  overflow-x-none max-w-11/12'>
            
            {/* Navbar */}


            {/* Section 1 */}

            {/* Instructor Button */}
            <Link to={'/signup'}>
                <div className='mt-8 w-[20%] mx-auto'>
                    <div className='flex p-4 bg-richblack-800  hover:scale-90
           hover:shadow-[inset_0px_-1px_0px_rgba(255, 255, 255, 0.18)] font-medium hover:shadow-richblack-50 hover:shadow-sm
           duration-200  transition-all hover:cursor-pointer text-richblack-200  rounded-full justify-center items-center gap-4'>
                        <p className=' transition-all duration-150'>Become an instructor</p>
                        <HiArrowNarrowRight size={20} />
                    </div>
                </div>
            </Link>

            {/* Heading anbd subheading */}
            <div className='flex flex-col justify-center items-center mt-8 gap-8 '>
                <div className='text-[36px] leading-8'>
                    Empower Your Future with <Highlight text={"Coding Skills"} direction={'b'} />
                </div>
                <div className='max-w-[70%] text-center text-md text-richblack-300'>
                    With our online coding courses, you can learn at your own pace,
                    from anywhere in the world, and get access to a wealth of resources,
                    including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <CTAButton text={"learn more"} active={true} linkTo="/signup" />
                    <CTAButton text={"book a demo"} active={false} linkTo="/signup" />
                </div>
            </div>

            {/* video section */}
            <div className='lg:w-[1035px] lg:h-[650px]   mx-auto mt-[5rem]'>
                <div className=' '>
                    <video className='border-b-[1rem] border-r-[1rem] relative z-40 border-white'
                        autoPlay
                        loop
                        muted
                    >
                        <source src={Banner} type='video/mp4' />
                    </video>
                    <div className='lg:h-[550px] lg:w-[1024px] rounded-md  absolute -bottom-[65%]  
                      bg-[#1294C8] blur-lg'>

                    </div>
                </div>
            </div>

            {/* Code Blocks */}

            <div className=''>
                <CodeBlocks
                    direction={"flex-row"}
                    heading={<div>
                        Unlock your <Highlight text={"coding potential "} direction={'b'} /> with our online courses.
                    </div>}
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    cta1={{
                        text: "Try it Yourself",
                        active: true,
                        linkTo: ""
                    }}
                    cta2={{
                        text: "Learn More",
                        active: false,
                        linkTo: "",

                    }}
                    codeBlock={`<!DOCTYPE html>\n<html>\n<body>\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n<p>My second paragraph.</p>\n</body>\n</html>`}

                    codeColor={"yellow-50"}
                    gradientColor={{
                        first: "#1FA2FF",
                        second: "#12D8FA",
                        third: "#A6FFCB"
                    }}
                />

            </div>
            <CodeBlocks
                direction={"flex-row-reverse"}
                heading={<div>
                    Start  <Highlight text={"coding in seconds"} direction={'b'} />
                </div>}
                subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                cta1={{
                    text: "Continue Lesson",
                    active: true,
                    linkTo: ""
                }}
                cta2={{
                    text: "Learn More",
                    active: false,
                    linkTo: "",

                }}
                codeBlock={`<!DOCTYPE html>\n<html>\n<body>\n<h1>My First Heading</h1>\n<p>My first paragraph\n<p>My second paragraph.</p>.</p>\n</body>\n</html>`}
                codeColor={"richblack-5"}
                gradientColor={{
                    first: "#1FA2FF",
                    second: "#12D8FA",
                    third: "#A6FFCB"
                }}
            />

            {/* Roadmap Section */}

            <div className='w-11/12 max-w-maxContent mx-auto font-inter'>
                <ExploreMore />
            </div>


            {/* Section 2 */}

            <div className='bg-pure-greys-5 text-richblack-700'>
                {/* bg image and buttons */}
                <div className='h-[333px] section2_bg object-contain text-white flex gap-6 justify-center items-center font-bold'>
                    <CTAButton text={"Explore full catalog"} active={true} linkTo={"/signup"} />
                    <CTAButton text={"learn more"} active={false} linkTo={"/signup"} />
                </div>
                {/* Skill for job intro */}
                <div className='w-11/12 max-w-[1440px] flex flex-row gap-6 items-center justify-center px-8 mx-auto mt-[4rem]'>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Get the skills that you need for a  <Highlight text={"job that is in demand"} direction={"r"} />
                    </div>
                    <div className='flex flex-col gap-8 items-start w-[40%]'>
                        <p className='text-md text-richblack-700 font-semibold'>The modern studynotion dictates its own terms , Today , to be a competetive specialist requires more than professional skills</p>
                        <CTAButton text={"Learn More"} active={true} />
                    </div>
                </div>
                {/* TimeLine Section */}
                <div className='flex justify-center mx-auto gap-[6rem] my-4 items-center w-11/12 max-w-maxContent mt-[6rem]'>

                    {/* Left Section */}
                    <div className='flex flex-col gap-[4rem] items-start'>
                        {
                            keyHighlights.map((highlights, index) => {
                                return (
                                    <div className='flex-col relative justify-center' key={index}>
                                        <div className='flex gap-8 justify-center items-baseline ' >
                                            <div className='flex flex-col justify-center  '>
                                                <div className='bg-white  rounded-full h-[60px] w-[60px] shadow-lg flex justify-center items-center'>
                                                    <img src={highlights.logo} alt='highlight-logo' />
                                                </div>
                                                <div>
                                                    {index !== 3 ? (<div className='w-[60px] flex mr-6 absolute -bottom-7 rotate-90 border-b-2 border-dotted  border-pure-greys-200'></div>) : (null)}

                                                </div>
                                            </div>
                                            <div className=''>
                                                <h4 className='font-bold text-xl'>{highlights.title}</h4>
                                                <p>{highlights.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Right Section */}
                    <div>
                        <div className='relative '>
                            <img src={timelineImage} alt='timeline' className='relative z-20' />

                            <div className='lg:w-[650px] lg:h-[480px] rounded-full absolute z-10  right-[5%] top-[10%]
                                blur-xl  bg-[#1294C8]'>

                            </div>
                            <div className='flex bg-caribbeangreen-700 absolute right-[12%] -bottom-12 z-40   px-4 py-8 gap-6 justify-between items-center w-[75%] mx-auto'>
                                <div className='flex justify-center items-center gap-4 px-8 mx-auto border-r-2  border-caribbeangreen-300'>
                                    <h2 className='font-bold text-white text-4xl'>10</h2>
                                    <h3 className='text-caribbeangreen-400  uppercase'>Years<br /> Experience</h3>
                                </div>
                                <div className='flex justify-center items-center gap-4 mr-8 '>
                                    <h2 className='font-bold text-white text-4xl'>250</h2>
                                    <h3 className='text-caribbeangreen-500 uppercase'>Type of <br />courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Swiss Knife  */}
                <div className='h-[150px]'>

                </div>
                <div className='flex flex-col  justify-center items-center w-11/12 max-w-maxContent mx-auto'>
                    <div className='flex flex-col justify-center gap-6 items-center text-center'>
                        <h2 className='text-4xl font-bold'>Your swiss knife for <Highlight text={'learning any language'} direction={'b'} /></h2>
                        <p className='w-[75%] text-md text-richblack-900'>Using spin making learning multiple language easy . With 20+ languages realistic voice over ,
                            process tracking , custom schedule and more </p>
                    </div>
                    {/* Images */}
                    <div className='flex  '>
                        <img className='translate-x-20 -translate-y-6' src={knowYourProgress} alt='know youur progress' />
                        <img className='-translate-x-6' src={compareWithOthers} alt='compare with others' />
                        <img className='-translate-x-40 -translate-y-6' src={planYourLessons} alt='plan your lessons' />
                    </div>

                    <div className='font-bold mb-[4rem]'>
                        <CTAButton text={"Learn More"} active={true} linkTo={"/signup   "} />
                    </div>
                </div>

            </div>


            {/* Section 3 */}

            <div>
                <div className='w-11/12 max-w-maxContent flex justify-between mx-auto gap-[4rem] items-center mt-[6rem]'>
                    {/* Left Section */}
                    <div className=' w-[110%] h-[110%]'>
                        <img src={instructorImage} alt={"Instructior"} className='w-[616px] h-[545px]' />
                    </div>
                    {/* Right Section */}
                    <div className='flex flex-col justify-center items-start gap-6'>
                        <h2 className='text-4xl font-bold'>Become an <br /> <Highlight text={'instructor'} direction={'b'} /></h2>
                        <p className=' text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion . we provide the tools and skills to teach what you <br /> love.</p>
                        <CTAButton text={"Start Teaching Today"} active={true} linkTo={'/signup'} />
                    </div>
                </div>
                <div className='m-[8rem]'>
                    <h2 className='text-4xl font-bold text-center'>Rewiew from other learner's</h2>
                </div>
            </div>


            {/* Section 4 */}
            <Footer />
        </div>


    )
}

export default HomePage