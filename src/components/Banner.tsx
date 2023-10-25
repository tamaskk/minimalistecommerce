import React from "react";
import bannerImg from "../assets/img/banner/banner1.webp";
import { Link } from "react-router-dom";

// Define the Banner functional component
const Banner: React.FC = () => {
  // Define the background style for the banner section
  const bgStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    // Render the component's content
    <section className="flex flex-col mx-auto w-full lg:w-5/6 max-w-[1200px] px-[1.5rem] lg:px-[2.5rem] pt-10 mb-10 overflow-hidden">
      <div className="w-full h-auto flex flex-col lg:flex-row">
        <div className="bg-slate-300 w-full lg:w-1/2 px-20 py-24">
          <h1 className="text-3xl font-bold mb-6">
            Creative harmonious living
          </h1>
          <p className="text-xl font-medium mb-6">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <Link
            to="/categories/all"
            onClick={() => window.scroll(0, 0)}
            className="uppercase bg-black text-white py-3 px-5 font-bold"
          >
            Shop now
          </Link>
        </div>
        <div
          className="w-full lg:w-1/2"
          style={{ ...bgStyle, backgroundImage: `url(${bannerImg})` }}
        ></div>
      </div>
    </section>
  );
};

export default Banner;
