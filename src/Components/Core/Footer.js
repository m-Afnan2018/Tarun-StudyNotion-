import React from 'react'
import Logo from "../../assets/Logo/Logo-Full-Light.png"
import { FaFacebook } from 'react-icons/fa'
import { SiGoogle } from 'react-icons/si'
import { BsFillSuitHeartFill, BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FooterLink2 } from '../../data/footer-links'
import "./Footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
   
    return (
        <div className='bg-richblack-800 w-full pt-28 font-inter'>
            <div className='w-11/12 max-w-maxContent  mx-auto  text-white flex justify-between gap-4  '>
                {/* Left section */}
                <div className='flex justify-center w-[50%] gap-12 border-r-2 border-richblack-700'>

                    {/* Section 1  */}

                    <div className='flex flex-col  items-start gap-6'>
                        <div>
                            <img src={Logo} alt='logo' className='w-[150px]' />
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-bold leading-[24px]  font-inter text-richblack-100'>Company</h2>
                            <ul className='text-richblack-400 leading-[22px] space-y-1 '>
                                <li >About</li>
                                <li>Carrers</li>
                                <li>Affiliates</li>
                            </ul>
                        </div>

                        <div className='flex gap-6  justify-start  text-richblack-400 items-center'>
                            <FaFacebook className='hover:text-richblack-100 duration-200 cursor-pointer' />
                            <SiGoogle className='hover:text-richblack-100 duration-200 cursor-pointer' />
                            <BsTwitter className='hover:text-richblack-100 duration-200 cursor-pointer' />
                            <BsYoutube className='hover:text-richblack-100 duration-200 cursor-pointer' />
                        </div>
                    </div>

                    {/* Secction 2 */}

                    <div className='flex flex-col gap-6'>
                        <div className='space-y-2'>
                            <h2 className='font-bold leading-[24px]  font-inter text-richblack-100'>Resources</h2>
                            <ul className='flex flex-col gap-2 text-richblack-400'>
                                <li>Articles</li>
                                <li>Blog</li>
                                <li>Chart Sheet</li>
                                <li>Code Challanges</li>
                                <li>Docs</li>
                                <li>Projects</li>
                                <li>Videos</li>
                                <li>Workspace</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-bold leading-[24px]  font-inter text-richblack-100'>Support</h2>
                            <ul className='text-richblack-400'>
                                <li>Help Center</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-col gap-10'>
                        <div className='space-y-2'>
                            <h2 className='font-bold leading-[24px]  font-inter text-richblack-100'>Plans</h2>
                            <ul className='flex flex-col gap-2 text-richblack-400'>
                                <li>Paid mamberships</li>
                                <li>For Students</li>
                                <li>Business Solutions</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-bold leading-[24px]   font-inter text-richblack-100'>Community</h2>
                            <ul className='flex flex-col gap-2 text-richblack-400'>
                                <li>Forums</li>
                                <li>Chapters</li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className='right flex justify-center w-[50%] items-baseline  '>
                    <div className='flex justify-center items-baseline gap-12'>
                        {FooterLink2.map((section,index) => (
                            <div className='space-y-2' key={index}>
                                <h2 className='font-bold leading-[24px]  font-inter text-richblack-100'>{section.title}</h2>
                                <ul className='flex flex-col gap-2 text-richblack-400'>
                                    {section.links.map((link,index) => (
                                        <Link to={link.link} key={index}>
                                            <li>{link.title}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
            {/* Copywright section */}
            <div className='flex justify-between w-11/12  mx-auto text-richblack-300 items-center mt-10 border-t-2 py-4 border-richblack-700'>
                <div>
                 <ul className='flex gap-2'>
                    <li className='px-2 border-r-2 cursor-pointer'>Privacy Policy</li>
                    <li className='px-2 border-r-2 cursor-pointer'>Cookie Policy</li>
                    <li className='cursor-pointer'>Terms</li>
                 </ul>
                </div>
                <div>
                    <h3 className='flex gap-2 items-center'> Made with <BsFillSuitHeartFill className='text-[#EF476F]'/> CodeHelp © 2023 Studynotion</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer