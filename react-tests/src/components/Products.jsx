import React from 'react'
import StarRating from './StarRating'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Store/Cart-slice'

export default function Products({ product }) {
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    function handleAddToCart() {
        dispatch(addToCart(product))
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id))
    }

    return (
        <div className='group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h=[360px] mt-10 ml-5 rounded-xl'>
            <div className="h-[180px]">
                {<img
                    src={product.image}
                    alt={product.title}
                    className='object cover h-full w-full'
                />}
            </div>
            <h1 className='text-xl font-bold'>{product.title}</h1>
            <p>${product.price}</p>
            <div className="flex items-center justify-center w-full mt-5">
            <button 
            onClick={ cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} 
            className='bg-red-950 text-white border-2 rounded-lg font-bolf p-4'>
                { cart.some(item => item.id === product.id) ? "Added to cart" : "Add to cart"}
                </button>
            <StarRating noOfStars={5} className="flex flex-row"/>
            </div>
        </div>
    )
}
