import React from "react";
import header1 from "../assets/img/header/home-img-1.webp";
import header2 from "../assets/img/header/home-img-2.webp";
import header3 from "../assets/img/header/home-img-3.webp";
import header4 from "../assets/img/header/home-img-4.webp";
import { Link } from "react-router-dom";

/**
 * Header component displays a featured section with images and links to different categories.
 */
const Header: React.FC = () => {
  const bgStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };  

  return (
    <section className="w-screen h-[70vh]">
      <div className="flex h-full flex-row gap-5 mx-auto w-full lg:w-5/6 max-w-[133rem] px-[1.5rem] lg:px-[2.5rem] py-10">
        <div className="flex flex-col lg:flex-row w-1/2 lg:w-3/4 gap-5">
          <Link to="categories/furnitures" className="flex items-end justify-start w-full lg:w-3/4 h-1/2 lg:h-auto max-w-full lg:max-w-[75%] group relative p-4 rounded-lg" style={{ ...bgStyle, backgroundImage: `url(${header1})` }}>
            <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg"></div>
            <h1 className="text-white text-xl lg:text-4xl font-semibold z-10">Live Comfortably</h1>
          </Link>
          <Link to="categories/skin-care" className="flex items-end justify-start w-full lg:w-1/4 h-1/2 lg:h-auto max-w-full lg:max-w-[25%] group relative p-4 rounded-lg" style={{ ...bgStyle, backgroundImage: `url(${header2})` }}>
            <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg"></div>
            <h1 className="text-white text-xl lg:text-4xl font-semibold z-10">Skincare</h1>
          </Link>
        </div>
        <div className="w-1/2 lg:w-1/4 max-w-full lg:max-w-[25%] flex flex-col gap-5">
          <Link to="categories/kitchen" className="flex items-end justify-start w-full h-1/2 group relative p-4 rounded-lg" style={{ ...bgStyle, backgroundImage: `url(${header3})` }}>
            <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg"></div>
            <h1 className="text-white text-xl lg:text-4xl font-semibold z-10">Kitchen</h1>
          </Link>
          <Link to="categories/electronics" className="flex items-end justify-start w-full h-1/2 group relative p-4 rounded-lg" style={{ ...bgStyle, backgroundImage: `url(${header4})` }}>
            <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg"></div>
            <h1 className="text-white text-xl lg:text-4xl font-semibold z-10">Electronics</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
