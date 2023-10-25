import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import SliderCard from "./SliderCard";
import '../../src/App.css';
import { items } from '../utils/AllItems';
const Slider = () => {
    // Filter the items array to display a subset of items with IDs between 9 and 17
    const filteredItems = items.filter((item) => item.id > 8 && item.id < 18);
    // Create a reference to the scrollable container
    const boxRef = useRef(null);
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
    return (_jsxs("div", { className: "mx-auto max-w-[1200px] px-[19px]", children: [_jsxs("div", { className: "flex justify-between w-full items-center py-10", children: [_jsx("h1", { className: "text-3xl font-semibold", children: "Trending now" }), _jsxs("div", { className: "w-auto flex items-center justify-center", children: [_jsx("button", { onClick: prevSlide, className: "border py-2 px-5 border-none bg-black text-white text-2xl flex items-center justify-center text-center", children: "< " }), _jsx("button", { onClick: nextSlide, className: "border py-2 px-5 border-none ml-5 bg-black text-white text-2xl flex items-center justify-center text-center", children: "> " })] })] }), _jsx("div", { ref: boxRef, id: "asdasd", className: "scrollBarCustom flex gap-[2.2rem] overflow-x-scroll overflow-y-hidden py-[1rem] px-[0.6rem] relative scroll-smooth", children: filteredItems.map((item) => (_jsx("div", { className: "w-auto h-auto border-none", children: _jsx(SliderCard, { name: item.description, price: item.price, img: item.img, id: item.id, category: item.category }) }, item.description))) })] }));
};
export default Slider;
