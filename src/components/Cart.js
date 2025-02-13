import { useSelector } from 'react-redux';
import { clearCart } from '../utilities/cardSlice';
import { useDispatch } from 'react-redux';
import ItemsList from './ItemsList'


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="w-8/12 m-auto">
      <div className="text-center">
        <h1 className="text-center text-3xl font-bold my-8">Cart</h1>
        <button onClick={handleClearCart} className="px-4 py-2 rounded-lg text-white bg-black text-center">Clear Cart</button>
      </div>
      <div>
        <ItemsList itemCards={cartItems}/>
      </div>
    </div>
  );
}

export default Cart;