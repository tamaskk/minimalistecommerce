import { useState } from "react";
import { Link } from "react-router-dom";
import useAppContext from "../utils/Maincontext.js";

// Define the CategoriesHeader functional component
const CategoriesHeader: React.FC = () => {

  // Use the 'useAppContext' hook to access the 'handleBtnName' and 'btnName' variables from the context
  const { handleBtnName, btnName } = useAppContext();

  return (
    <>
      <div className="mx-auto max-w-[1200px] px-[19]">
        <div className="flex items-center flex-col pt-[4rem]">
          <div className="flex justify-around lg:justify-normal items-center mb-24 w-full">
            {/* Create a link to the home page and scroll to the top when clicked */}
            <Link onClick={() => window.scrollTo(0, 0)} to="/" className="items-center text-black flex text-[1.6rem] justify-center text-left decoration-none">
              &lt; Home
            </Link>
            <h3 className="text-[2rem] mx-0 lg:mx-auto font-bold text-center uppercase">{btnName}</h3>
          </div>
          <div className="flex items-center flex-wrap gap-4 justify-center w-full">
            {/* Create category links with buttons and conditionally apply styles based on 'btnName' */}
            <Link to="all" onClick={() => handleBtnName("all")} className={`border-2 py-1 px-4 ${btnName === "all" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button>All</button>
            </Link>
            <Link to="furnitures" className={`border-2 py-1 px-4 ${btnName === "furnitures" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button onClick={() => handleBtnName("furnitures")}>
                Furnitures
              </button>
            </Link>
            <Link to="electronics" className={`border-2 py-1 px-4 ${btnName === "electronics" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button onClick={() => handleBtnName("electronics")}>
                Electronics
              </button>
            </Link>
            <Link to="lamp" className={`border-2 py-1 px-4 ${btnName === "lamp" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button onClick={() => handleBtnName("lamp")}>Lamps</button>
            </Link>
            <Link to="kitchen" className={`border-2 py-1 px-4 ${btnName === "kitchen" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button onClick={() => handleBtnName("kitchen")}>Kitchen</button>
            </Link>
            <Link to="chairs" className={`border-2 py-1 px-4 ${btnName === "chairs" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button onClick={() => handleBtnName("chairs")}>Chairs</button>
            </Link>
            <Link to="skin-care" className={`border-2 py-1 px-4 ${btnName === "skin care" ? "border-black" : "border-gray-500"} hover:border-black transition-all duration-300`}>
              <button onClick={() => handleBtnName("skin care")}>
                Skin Care
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
