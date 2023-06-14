import React from 'react'
import Highlight from '../Highlight'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import Highlight2 from '../Common/Highlight2'
const Quote = () => {
    return (
        <div className=' relative text-white text-3xl  text-richblack-600 font-semibold mx-auto text-center w-[70%]'>
            <RiDoubleQuotesL className='absolute -top-7 -left-2' />
            We are passionate about revolutionizing the way we learn. Our innovative platform
            <Highlight2 text={" combines technology "} direction={"b"}
                color={{
                    first: "#1FA2FF",
                    second: "#12D8FA",
                    third: "#A6FFCB"
                }} />, <Highlight2 text={"expertise "} direction={"r"}

                color={{
                    first: "#E65C00",
                    third: "#F9D423"
                }}

            />, and community to create an <Highlight2 text={"unparalleled educational experience"}
                direction={"r"} 
                color={{
                    first: "#E65C00",
                    third: "#F9D423"
                }}
                />
            <RiDoubleQuotesR className='absolute right-2 -bottom-4' />

        </div>
    )
}

export default Quote