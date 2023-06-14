import React from 'react'

import { LearningGridArray } from '../../../data/LearningGridArray'
import Highlight from '../Highlight'
import CTAButton from '../Home/CTAButton'

const LearningGrid = () => {
    return (
        <div className={`grid grid-rows-2 grid-cols-4 my-8 `}>
            {LearningGridArray.map((grid, index) => (

                <div key={index} className={`
                ${grid.order % 2 === 0 ? "bg-richblack-800 lg:h-[280px] p-5" : "bg-richblack-700  lg:h-[280px] p-5"}
                ${grid.order === 3 && "lg:col-start-2"}
                ${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${index === 0 && "bg-transparent"}
                `
                }>
                    {
                        grid.order < 0 ?
                            <div className='col-span-2 lg:w-[90%] lg:h-[250px] flex gap-4 flex-col justify-center items-start'>
                                <h2 className='text-4xl'>{grid.heading}<br /><Highlight direction={"r"} text={grid.highlightText} /></h2>
                                <p className='text-richblack-300'>{grid.description}</p>
                                <CTAButton text={"Learn More"} active={true} />
                            </div> :
                            <div className={`flex flex-col gap-4 justify-start  items-start lg:h-[300px] p-7`}>
                                <h2 className='text-richblack-5 font-semibold text-lg '>{grid.heading}</h2>
                                <h2 className='text-richblack-100'>{grid.description}</h2>
                            </div>
                    }
                </div>

            ))}
        </div>
    )
}

export default LearningGrid