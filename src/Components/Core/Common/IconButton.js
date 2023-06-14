import React from 'react'
import * as Icons from 'react-icons/vsc';


const IconButton = ({text,onclick,iconName}) => {
  const Icon = Icons[iconName];
  return (
    <div className='flex gap-2 bg-yellow-50 cursor-pointer px-4 py-2 text-richblack-800 rounded-md  justify-center items-center'>
        <button className='text-black   text-center '
        onClick={onclick}>
                {text}
        </button>
    </div>
  )
}

export default IconButton