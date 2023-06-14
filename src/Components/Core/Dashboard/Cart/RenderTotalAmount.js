import React from 'react'
import { useSelector } from 'react-redux'

const RenderTotalAmount = () => {
    const{total} = useSelector((state)=>state.cart)
  return (
    <div>
      <h2>Total : </h2> 
      <p>Rs . {total}</p> 
      <s>Rs.5500</s>
      <button>Buy Now</button>

      {/* Later Payment integration on onclick  */}
    </div>
  )
}

export default RenderTotalAmount