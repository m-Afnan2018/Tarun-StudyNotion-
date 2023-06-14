import React from 'react'

const Highlight2 = ({text,direction,color}) => {
    
  return (
    <span className={`font-semibold bg-gradient-to-${direction} 
    from-[${color.first}] ${color.second?`via-[${color.second}]`:""} to-[${color.third}] text-transparent bg-clip-text`}>{text}</span>
  )
}

export default Highlight2