import React, { useState, useRef, useEffect } from "react";
import SliderCard from "./SliderCard";
import '../../src/App.css'
import { items } from '../utils/AllItems'

const Slider = () => {
  // Filter the items array to display a subset of items with IDs between 9 and 17
  const filteredItems = items.filter((item) => item.id > 8 && item.id < 18)

  // Create a reference to the scrollable container
  const boxRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the previous slide
  const prevSlide = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
    }
  };

  // Function to scroll to the next slide
  const nextSlide = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
    }
  };

  // Use useEffect to perform actions when the component mounts or when 'boxRef' changes
  useEffect(() => {
    if (boxRef.current) {
      // You can perform additional scrolling-related actions here if needed
    }
  }, [boxRef]);

  return (
    <div className="mx-auto max-w-[1200px] px-[19px]">
      <div className="flex justify-between w-full items-center py-10">
        <h1 className="text-3xl font-semibold">Trending now</h1>
        <div className="w-auto flex items-center justify-center">
          <button onClick={prevSlide} className="border py-2 px-5 border-none bg-black text-white text-2xl flex items-center justify-center text-center">
            &lt; {/* Left arrow */}
          </button>
          <button onClick={nextSlide} className="border py-2 px-5 border-none ml-5 bg-black text-white text-2xl flex items-center justify-center text-center">
            &gt; {/* Right arrow */}
          </button>
        </div>
      </div>
      <div
        ref={boxRef} // Attach the reference to the scrollable container
        id="asdasd"
        className="scrollBarCustom flex gap-[2.2rem] overflow-x-scroll overflow-y-hidden py-[1rem] px-[0.6rem] relative scroll-smooth"
      >
        {/* Map through the filtered items and display them as SliderCards */}
        {filteredItems.map((item) => (
          <div className="w-auto h-auto border-none" key={item.description}>
            <SliderCard name={item.description} price={item.price} img={item.img} id={item.id} category={item.category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
