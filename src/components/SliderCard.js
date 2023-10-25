import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import useAppContext from "../utils/Maincontext.js";
// Define the SliderCard component with specified props
const SliderCard = ({ img, name, price, id, category }) => {
    // Access the 'setItemIDandCategory' function from the app context using 'useAppContext'
    const { setItemIDandCategory } = useAppContext();
    // Define CSS style for the background image of the card
    const bgStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${img})`
    };
    return (_jsx(Link, { to: `/categories/products/${id}`, onClick: () => {
            // Call 'setItemIDandCategory' with the product's ID and category and scroll to the top of the page
            setItemIDandCategory([id, category]);
            window.scrollTo(0, 0);
        }, children: _jsx("div", { className: "cursor-pointer outline-2 outline-slate-300 hover:outline-slate-300 transition-all duration-300 border-2 border-slate-300 hover:border-black", children: _jsxs("a", { href: "#", className: "decoration-none text-black", children: [_jsx("div", { className: 'w-[14rem]', children: _jsx("img", { src: img, alt: name }) }), _jsxs("div", { className: "flex flex-col items-start justify-center text-[1.1rem] font-light p-[0.5rem]", children: [_jsx("p", { children: name }), _jsxs("p", { className: "text-[1.3rem] font-bold mt-[1.4rem]", children: ["$", price] })] })] }) }) }));
};
export default SliderCard;
