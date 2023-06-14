import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'


const steps = [
    {
        id: 1,
        name: "Course Information"
    },
    {
        id: 2,
        name: "Course Builder"
    },
    {
        id: 3,
        name: "Publish"
    }
]



const RenderSteps = () => {

    // const { step } = useSelector((state) => state.cart)
    const currentStep = 1;
    return (
        <div>
            <div className='flex flex-col gap-2 justify-center items-center'>


                <div  className='flex gap-8'>
                    {steps.map((item) => (
                        <div className='flex gap-6'>
                           
                                {item.id<currentStep?(<FaCheckCircle size={25}/>):
                                <div className={`${item.id === currentStep ? "bg-yellow-800 text-yellow-50 border-2 border-yellow-50" : "bg-richblack-800 border-2   text-richblack-700 border-richblack-700"}
                                rounded-full  px-4 py-2`}>
                                    {item.id}
                                    </div>}
                            
                            {item.id !== steps.length ? (
                                <div className='border-r-2 w-[10px] rotate-90 border-dashed border-yellow-50'>

                                </div>
                            ) : (
                                <div>

                                </div>
                            )}
                        </div>

                    ))}
                </div>

                <div className='flex'>
                    {steps.map((item) => (
                        <div className='flex'>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RenderSteps