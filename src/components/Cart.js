import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useAppContext from "../utils/Maincontext.js";
import { items } from "../utils/AllItems";
import emptyCart from '../assets/img/cart/empty-cart.webp';
// Define the Overlay functional component
const Overlay = ({ children }) => {
    const { cartOpened } = useAppContext();
    return (_jsx("div", { className: `fixed top-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-70 transition-all duration-200 flex items-center justify-end ${cartOpened ? "opacity-1 z-[999999]" : "z-[-1] opacity-0"}`, children: children }));
};
// Define the Cart functional component
const Cart = () => {
    const { cartOpenHandler, cartOpened, cart, removeItem, cartIncrease, cartDecrease } = useAppContext();
    // Calculate the total price of items in the cart
    const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
    return (_jsx(Overlay, { children: _jsxs("div", { className: `h-full w-full lg:w-1/3 p-8 bg-white transition-all duration-700 ${cartOpened ? "translate-x-0 z-[-1]" : "translate-x-[300vw] z-[9999999]"}`, children: [_jsx("div", { onClick: cartOpenHandler, className: `fixed top-5 right-5 cursor-pointer z-[99999999] transition-all duration-700 text-3xl`, children: "X" }), _jsxs("h1", { className: "text-xl lg:text-3xl font-bold mb-5", children: ["Your shopping Cart ( ", cart.length, " )"] }), cart.length > 0 ? (_jsx("div", { className: "flex flex-col gap-5 w-full h-3/4 overflow-y-scroll pb-10", children: cart.map((cartItem) => {
                        const item = items.find((item) => item.id === cartItem.id);
                        if (item) {
                            return (_jsxs("div", { className: "flex border-2 border-black", children: [_jsx("img", { src: item.img, className: "w-1/4 h-auto" }), _jsxs("div", { className: "w-3/4 bg-gray-100", children: [_jsxs("div", { className: "flex flex-row items-center justify-between p-2 lg:p-4", children: [_jsx("p", { className: "text-xl lg:text-2xl", children: item.description }), _jsxs("p", { className: "text-xl font-bold ml-1", children: [cartItem.totalPrice, "$"] })] }), _jsxs("div", { className: "flex flex-row items-center justify-between p-2 lg:p-4", children: [_jsxs("div", { className: "flex items-center justify-center", children: [_jsx("button", { onClick: () => cartDecrease(cartItem.id), className: "px-2 bg-black text-white border border-black text-2xl lg:text-4xl", children: "-" }), _jsx("div", { className: "px-3 bg-transparent text-black border border-black text-2xl lg:text-4xl", children: cartItem.quantity }), _jsx("button", { onClick: () => cartIncrease(cartItem.id), className: "px-2 bg-black text-white border border-black text-2xl lg:text-4xl", children: "+" })] }), _jsx("div", { onClick: () => removeItem(cartItem.id), className: `cursor-pointer z-[99999999] transition-all duration-700 text-3xl`, children: "X" })] })] })] }, cartItem.id));
                        }
                        return null;
                    }) })) : (_jsxs("div", { className: "w-full h-3/4 flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-2xl font-semibold mb-2", children: "Your cart is empty" }), _jsx("img", { src: emptyCart, alt: "Empty Cart" })] })), _jsx("div", { className: "border-dashed border-2 border-black" }), _jsxs("div", { className: "flex flex-row items-center justify-between", children: [_jsxs("div", { className: "flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-xl lg:text-2xl font-bold", children: "Subtotal" }), _jsxs("h1", { className: "text-xl lg:text-2xl font-bold", children: [totalPrice, "$"] })] }), _jsx("button", { disabled: cart.length === 0, className: "py-2 px-12 bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300", children: "Go to Checkout" })] })] }) }));
};
export default Cart;
