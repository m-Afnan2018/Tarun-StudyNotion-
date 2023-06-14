import React from 'react'

const Highlight = ({text,direction,color}) => {
  return (
    <span className={`font-semibold bg-gradient-to-${direction} 
    from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text`}>{text}</span>
  )
}

export default Highlight