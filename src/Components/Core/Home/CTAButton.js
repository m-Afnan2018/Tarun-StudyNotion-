import React from 'react'
import { Link } from 'react-router-dom'
const CTAButton = ({ text, active, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div className={`px-6 py-3 text-center rounded-md  ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"}
    hover:scale-95 transition-all duration-150 cursor-pointer capitalize hover:shadow-[1.95px_1.95px_2.6px_rgba(0, 0, 0, 0.15)]
    shadow-sm hover:shadow-richblack-300`}>
        {text}
      </div>

    </Link>
  )
}

export default CTAButton