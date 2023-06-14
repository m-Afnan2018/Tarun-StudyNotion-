import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { StarRatingComponent } from 'react-rating-stars-component'
import {AiFillStar} from 'react-icons/ai'


const RenderCartItems = () => {
    const { cart, removeFromCart } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    return (
        <div>
            {cart.map((course, index) => (
                <div key={index}>
                    <div>
                        <img src={course.thumbnail} />
                        <p>{course.name}</p>
                        <p>4.8</p>
                        {/* React start component here */}
                        {/* <StarRatingComponent
                            name={"Rating"} 
                            value={4} 
                            starCount={5} 
                            renderStarIcon = {()=><span><AiFillStar/></span>}
                            starColor={"#FFD60A"} 
                            emptyStarColor={"#161D29"}
                            editing={false} 
                        /> */}
                    </div>
                    <div className='flex'>
                        <button onClick={()=>{dispatch(removeFromCart(index))}}>Remove</button>
                        <p>{course.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RenderCartItems