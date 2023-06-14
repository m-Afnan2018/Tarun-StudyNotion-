import React from 'react'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { FaGlobeAmericas, FaPhoneAlt } from 'react-icons/fa'
import ContactForm from '../Components/Core/Common/ContactForm'
import Footer from '../Components/Core/Footer'


const contactOptions = [
    {
        icon: "<HiChatBubbleLeftRight />",
        option: "Chat with us",
        description: "Our friendly team is here to help.",
        detail: "@mail address"
    },
    {
        icon: "<FaGlobeAmericas />",
        option: "Visit us",
        description: "Come and say hello at our office HQ.",
        detail: "11/12 Sector 48 Tikri village gurugram 12202"
    },
    {
        icon: "<FaPhoneAlt />",
        option: "Call us",
        description: "Mon - Fri From 8am to 5pm",
        detail: "+123 456 7890"
    }
]

const ContactUs = () => {
    return (
        <div className='w-full'>
            <div className=' text-richblack-5 flex gap-14 my-12 justify-center items-start'>
                {/* Left Section */}
                <div className='p-6 rounded-md bg-richblack-800 flex flex-col gap-6'>

                    {contactOptions.map((option) => (
                        <div className='flex gap-6 items-baseline'>
                            <div>
                                <HiChatBubbleLeftRight />
                            </div>
                            <div>
                                <h2 className='text-2xl'>{option.option}</h2>
                                <p className='text-richblack-200'>{option.description} <br />{option.detail}</p>
                            </div>
                        </div>
                    ))}


                </div>
                {/* Right Section */}
                <div className=' border-2 border-richblack-700  rounded-md flex flex-col justify-start py-4 items-center pr-[6rem]'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-semibold'>Got a Idea? We’ve got the skills. <br />Let’s team up</h1>
                        <p>Tell us more about yourself and what you’re got in mind.</p>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs