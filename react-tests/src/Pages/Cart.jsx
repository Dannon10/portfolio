import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Cartile from "../components/Cartile"

export default function Cart() {

    const [totalCart, setTotalCart] = useState(0)

    const  cart  = useSelector(state => state.cart)

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])


    return (

        <div>
            {
                cart.length > 0 ? (
                    <>
                <div>
                        <div className="flex flex-col justify-center items-center p-3">
                            {
                                cart.map(cartItem => <Cartile cartItem={cartItem} key={cartItem.id} />)
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Your Cart Summary</h1>
                            <p>
                                <span>Total Items</span>
                                <span>:{cart.length}</span>
                            </p>
                            <p>
                                <span>Total amount</span>
                                <span>${totalCart.toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                            </>
                    )
                    : (<div>
                        <h1>Your cart is empty</h1>
                        <Link to="/">
                            <button> Shop Now!</button>
                        </Link>
                    </div>)
            }
        </div>
    )
}
