
import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartItems from './RenderCartItems'
import RenderTotalAmount from './RenderTotalAmount'


const Cart = () => {
    const { totalItems,cart } = useSelector((state) => state.cart)

    return (
        <div>
            <div className='text-richblack-5 '>
                <div className='space-y-6'>
                    <h1 className="text-3xl text-richblack-5 font-semibold">My Cart</h1>
                    {totalItems ? (<p>{totalItems} Courses in Your Cart</p>) : (<p>Your cart is empty</p>)}
                </div>
                {cart.length > 0 ?
                    <div className='flex  jusrtify-between gap-6'>
                        <RenderCartItems />
                        <RenderTotalAmount />
                    </div> :
                    <div>
                    </div>}
            </div>
        </div>
    )
}

export default Cart