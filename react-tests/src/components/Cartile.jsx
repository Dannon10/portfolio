import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/Cart-slice';

export default function Cartile({ cartItem }) {

  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id))
    console.log(cartItem.id)
  };

  return (
    <div>
        <img src={cartItem.image} alt={cartItem.title} />
        <h1>{cartItem.title}</h1>
        <p>{cartItem.price}</p>
        <button
        onClick={handleRemoveFromCart}
        className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>
            Remove from cart
        </button>
    </div>
  )
}
