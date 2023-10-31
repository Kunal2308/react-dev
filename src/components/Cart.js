import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { ResItemList } from "./ResItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handlecleareCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" text-center p-4 m-4">
      <h1 className=" font-bold text-xl">Cart</h1>
      {cartItems.length ? (
        <button
          onClick={handlecleareCart}
          className=" p-2 bg-black text-white rounded-md"
        >
          Clear Cart
        </button>
      ) : (
        ""
      )}
      {cartItems.length === 0 && <h1>Cart is empty. Add Items to the Cart.</h1>}
      <div className=" w-6/12 m-auto">
        <ResItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
