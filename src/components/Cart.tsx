import React from "react";
import useAppContext from "../utils/Maincontext.js";
import { items } from "../utils/AllItems";
import emptyCart from '../assets/img/cart/empty-cart.webp';

// Define the OverlayProps interface for the Overlay component
interface OverlayProps {
  children: React.ReactNode;
}

// Define the Overlay functional component
const Overlay: React.FC<OverlayProps> = ({ children }) => {
  const { cartOpened } = useAppContext();

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-70 transition-all duration-200 flex items-center justify-end ${
        cartOpened ? "opacity-1 z-[999999]" : "z-[-1] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// Define the Cart functional component
const Cart = () => {
  const { cartOpenHandler, cartOpened, cart, removeItem, cartIncrease, cartDecrease } = useAppContext();

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <Overlay>
      <div
        className={`h-full w-3/4 lg:w-1/3 p-8 bg-white transition-all duration-700 ${
          cartOpened ? "translate-x-0 z-[-1]" : "translate-x-[300vw] z-[9999999]"
        }`}
      >
        <div
          onClick={cartOpenHandler}
          className={`fixed top-5 right-5 cursor-pointer z-[99999999] transition-all duration-700 text-3xl`}
        >
          X
        </div>
        <h1 className="text-3xl font-bold mb-5">
          Your shopping Cart ( {cart.length} )
        </h1>
        {cart.length > 0 ? (
          <div className="flex flex-col gap-5 w-full h-3/4 overflow-y-scroll pb-10">
            {cart.map((cartItem) => {
              const item = items.find((item) => item.id === cartItem.id);

              if (item) {
                return (
                  <div key={cartItem.id} className="flex border-2 border-black">
                    <img src={item.img} className="w-1/4 h-auto" />
                    <div className="w-3/4 bg-gray-100">
                      <div className="flex flex-row items-center justify-between p-4">
                        <p className="text-2xl">{item.description}</p>
                        <p className="text-xl font-bold ml-1">{cartItem.totalPrice}$</p>
                      </div>
                      <div className="flex flex-row items-center justify-between p-4">
                        <div className="flex items-center justify-center">
                          <button onClick={() => cartDecrease(cartItem.id)} className="px-2 bg-black text-white border border-black text-4xl">
                            -
                          </button>
                          <div className="px-3 bg-transparent text-black border border-black text-4xl">
                            {cartItem.quantity}
                          </div>
                          <button onClick={() => cartIncrease(cartItem.id)} className="px-2 bg-black text-white border border-black text-4xl">
                            +
                          </button>
                        </div>
                        <div onClick={() => removeItem(cartItem.id)} className={`cursor-pointer z-[99999999] transition-all duration-700 text-3xl`}>X</div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : (
          <div className="w-full h-3/4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold mb-2">Your cart is empty</h1>
            <img src={emptyCart} alt="Empty Cart" />
          </div>
        )}
        <div className="border-dashed border-2 border-black"></div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Subtotal</h1>
            <h1 className="text-2xl font-bold">{totalPrice}$</h1>
          </div>
          <button disabled={cart.length === 0} className="py-2 px-12 bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
            Go to Checkout
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default Cart;
