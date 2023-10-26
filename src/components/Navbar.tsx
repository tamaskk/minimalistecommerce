import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAppContext from "../utils/Maincontext.js";
import Cart from "./Cart";

const Navbar: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Access context variables and functions using useAppContext
  const { menuOpenHandler, menuOpened, cartOpenHandler, totalQuantity, cart } =
    useAppContext();

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

  return (
    <>
      <Cart /> {/* Render the Cart component to display the shopping cart. */}
      <nav className="w-screen h-1/6 hidden lg:flex items-center justify-between px-40 py-5 shadow-slate-300 shadow-md">
        <Link
          to="/"
          className="w-20 h-20 bg-red-600 rounded-full cursor-pointer hover:scale-110 duration-300 transition-all"
        ></Link>
        <div className="flex flex-row items-center">
          {/* Navigation links */}
          <NavLink
            to="categories/all"
            className="uppercase min-w-fit mr-5 py-2 border-b-2 border-white hover:border-black transition-all duration-300"
          >
            Categories
          </NavLink>
          <NavLink
            to=""
            className="uppercase min-w-fit mr-5 py-2 border-b-2 border-white hover:border-black transition-all duration-300"
          >
            Product Page
          </NavLink>
          {/* Shopping cart icon with quantity */}
          <div
            onClick={cartOpenHandler}
            className={`w-10 h-10 bg-black cursor-pointer hover:scale-110 transition-all duration-300 flex items-center justify-center ${
              isAnimating ? "-translate-y-4" : "translate-y-0"
            }`}
          >
            <div className="text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-full -translate-y-full p-2">
              {totalQuantity}
            </div>
          </div>
        </div>
      </nav>
      <div className="w-screen flex flex-row items-center justify-between lg:hidden py-3 pl-10 pr-20">
        <Link
          to="/"
          className="w-10 h-10 bg-red-600 rounded-full cursor-pointer hover:scale-110 duration-300 transition-all"
        ></Link>
        <div>
          <div
            className="w-10 h-10 bg-black hover:scale-110 cursor-pointer"
            onClick={cartOpenHandler}
          >
            <div className="text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-[125%] -translate-y-1/2 p-2">
              {totalQuantity}
            </div>
          </div>
          <div
            className="absolute lg:hidden top-5 right-5 z-[9999]"
            onClick={menuOpenHandler}
          >
            <div className={`w-10 h-1 bg-black rounded-lg mb-2`}></div>
            <div className={`w-10 h-1 bg-black rounded-lg mb-2`}></div>
            <div className={`w-10 h-1 bg-black rounded-lg `}></div>
          </div>
        </div>
      </div>
      <nav
        className={`fixed top-0 left-0 z-[99999] w-screen h-screen py-64 bg-slate-300 flex lg:hidden ${
          menuOpened ? "translate-x-0" : "-translate-x-[100vw]"
        } transition-all text-center duration-500 flex flex-col items-center justify-center gap-y-10`}
      >
        <div
          className="absolute lg:hidden top-5 right-5 z-[999999]"
          onClick={menuOpenHandler}
        >
          <div
            className={`w-10 h-1 bg-black rounded-lg mb-2 translate-y-3 rotate-45`}
          ></div>
          <div className={`w-10 h-1 bg-black rounded-lg -rotate-45`}></div>
        </div>
        <div className="w-20 h-20 bg-red-600 rounded-full" onClick={menuOpenHandler}></div>

        <Link
          to="categories/all"
          onClick={menuOpenHandler}
          className="uppercase min-w-fit py-2 border-b-2 border-white hover:border-black transition-all duration-300"
        >
          Categories
        </Link>
        <NavLink
          to="categories/products/:id"
          onClick={menuOpenHandler}
          className="uppercase min-w-fit py-2 border-b-2 border-white hover:border-black transition-all duration-300"
        >
          Product Page
        </NavLink>
        <div className="w-10 h-10 bg-black" onClick={() => {cartOpenHandler(); menuOpenHandler()}}>
          <div className="text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-[130%] -translate-y-1/2 p-2">
            {totalQuantity}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
