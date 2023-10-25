import React from "react";
import bannerImg from "../assets/img/banner/banner2.webp";
import { Link } from "react-router-dom";

// Define a React functional component called Banner
const Banner: React.FC = () => {
  // CSS style for the background of the banner
  const bgStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    // Start of the banner section
    <section className="flex flex-col mx-auto w-full lg:w-5/6 max-w-[1200px] px-[1.5rem] lg:px-[2.5rem] pt-10 mb-10 overflow-hidden">
      <div className="w-full h-auto flex flex-col lg:flex-row-reverse">
        {/* Left side of the banner with background color and content */}
        <div className="bg-slate-300 w-full lg:w-1/2 px-20 py-24">
          <h1 className="text-3xl font-bold mb-6">
            Comfortable & Elegant Living
          </h1>
          <p className="text-xl font-medium mb-6">
            RAOUF Products are all made to standard sizes so that you can mix and match them freely.
          </p>
          {/* Link to navigate to a specific route, and a button for shopping */}
          <Link to="categories/all" onClick={() => window.scroll(0, 0)} className="uppercase bg-black text-white py-3 px-5 font-bold">
            Shop now
          </Link>
        </div>

        {/* Right side of the banner with a background image */}
        <div
          className="w-full lg:w-1/2"
          style={{ ...bgStyle, backgroundImage: `url(${bannerImg})` }}
        >
          {/* This div is used for displaying the background image */}
        </div>
      </div>
    </section>
    // End of the banner section
  );
};

// Export the Banner component for use in other parts of the application
export default Banner;
