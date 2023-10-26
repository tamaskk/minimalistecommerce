import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAppContext from "../utils/Maincontext.js";
import Cart from "./Cart";
const Navbar = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    // Access context variables and functions using useAppContext
    const { menuOpenHandler, menuOpened, cartOpenHandler, totalQuantity, cart } = useAppContext();
    useEffect(() => {
        if (totalQuantity !== 0) {
            setIsAnimating(true);
            // Set a timeout to remove animation after 100ms
            const animationTimeout = setTimeout(() => {
                setIsAnimating(false);
            }, 100);
            return () => clearTimeout(animationTimeout);
        }
    }, [totalQuantity]);
    return (_jsxs(_Fragment, { children: [_jsx(Cart, {}), " ", _jsxs("nav", { className: "w-screen h-1/6 hidden lg:flex items-center justify-between px-40 py-5 shadow-slate-300 shadow-md", children: [_jsx(Link, { to: "/", className: "w-20 h-20 bg-red-600 rounded-full cursor-pointer hover:scale-110 duration-300 transition-all" }), _jsxs("div", { className: "flex flex-row items-center", children: [_jsx(NavLink, { to: "categories/all", className: "uppercase min-w-fit mr-5 py-2 border-b-2 border-white hover:border-black transition-all duration-300", children: "Categories" }), _jsx(NavLink, { to: "", className: "uppercase min-w-fit mr-5 py-2 border-b-2 border-white hover:border-black transition-all duration-300", children: "Product Page" }), _jsx("div", { onClick: cartOpenHandler, className: `w-10 h-10 bg-black cursor-pointer hover:scale-110 transition-all duration-300 flex items-center justify-center ${isAnimating ? "-translate-y-4" : "translate-y-0"}`, children: _jsx("div", { className: "text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-full -translate-y-full p-2", children: totalQuantity }) })] })] }), _jsxs("div", { className: "w-screen flex flex-row items-center justify-between lg:hidden py-3 pl-10 pr-20", children: [_jsx(Link, { to: "/", className: "w-10 h-10 bg-red-600 rounded-full cursor-pointer hover:scale-110 duration-300 transition-all" }), _jsxs("div", { children: [_jsx("div", { className: "w-10 h-10 bg-black hover:scale-110 cursor-pointer", onClick: cartOpenHandler, children: _jsx("div", { className: "text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-[125%] -translate-y-1/2 p-2", children: totalQuantity }) }), _jsxs("div", { className: "absolute lg:hidden top-5 right-5 z-[9999]", onClick: menuOpenHandler, children: [_jsx("div", { className: `w-10 h-1 bg-black rounded-lg mb-2` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg mb-2` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg ` })] })] })] }), _jsxs("nav", { className: `fixed top-0 left-0 z-[99999] w-screen h-screen py-64 bg-slate-300 flex lg:hidden ${menuOpened ? "translate-x-0" : "-translate-x-[100vw]"} transition-all text-center duration-500 flex flex-col items-center justify-center gap-y-10`, children: [_jsxs("div", { className: "absolute lg:hidden top-5 right-5 z-[999999]", onClick: menuOpenHandler, children: [_jsx("div", { className: `w-10 h-1 bg-black rounded-lg mb-2 translate-y-3 rotate-45` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg -rotate-45` })] }), _jsx("div", { className: "w-20 h-20 bg-red-600 rounded-full", onClick: menuOpenHandler }), _jsx(Link, { to: "categories/all", onClick: menuOpenHandler, className: "uppercase min-w-fit py-2 border-b-2 border-white hover:border-black transition-all duration-300", children: "Categories" }), _jsx(NavLink, { to: "categories/products/:id", onClick: menuOpenHandler, className: "uppercase min-w-fit py-2 border-b-2 border-white hover:border-black transition-all duration-300", children: "Product Page" }), _jsx("div", { className: "w-10 h-10 bg-black", onClick: () => { cartOpenHandler(); menuOpenHandler(); }, children: _jsx("div", { className: "text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-[130%] -translate-y-1/2 p-2", children: totalQuantity }) })] })] }));
};
export default Navbar;
