import React from 'react'
import CTAButton from './CTAButton'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({ direction, heading, subHeading, cta1, cta2, codeBlock, codeColor , gradientColor }) => {
    return (
        <div className={`flex ${direction} mt-[4rem] my-[6rem] gap-[6rem] justify-center max-w-[1440px] mx-[8rem]  items-center`}>
            <div className='w-[50%] space-y-4'>
                <div className='text-4xl'>
                    {heading}
                </div>
                <div className='text-richblack-300 text-sm'>
                    {subHeading}
                </div>
                <div className='flex gap-5'>
                    <div className='flex justify-center items-center'>
                        <CTAButton text={cta1.text} active={cta1.active} linkTo={cta1.linkTo} />
                        {/* <HiArrowNarrowRight size={20} /> */}
                    </div>
                    <CTAButton text={cta2.text} active={cta2.active} linkTo={cta2.linkTo} />
                </div>
            </div>
            {/* Code typing animation */}
            <div className='relative flex w-[100%] p-4 z-50 outline bg-[#ffffff00] outline-richblack-300 bg-gradient-to-r from-[rgba(14, 26, 45, 0.24)] to-[rgba(17, 30, 50, 0.38)] lg:w-[500px]'>
                <div className='w-[10%] text-richblack-300'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                </div>
                <div className='relative '>
                    <TypeAnimation className={`w-[90%]  relative z-30  text-${codeColor}`}
                        sequence={[codeBlock, 2000, ""]}
                        cursor={true}
                        repeat={Infinity}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block",
                            
                        }}
                        omitDeletionAnimation={true}
                    />
                    <div className={`absolute lg:h-[255px]  opacity-40 w-[312px] z-10 blur-xl bg-gradient-to-b from-[${gradientColor.first}] via-[${gradientColor.second}] to-[${gradientColor.third}] opacity-4 -top-[55px] -left-[95px]  rounded-full`}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodeBlocks