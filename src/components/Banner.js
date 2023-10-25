import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import bannerImg from "../assets/img/banner/banner1.webp";
import { Link } from "react-router-dom";
// Define the Banner functional component
const Banner = () => {
    // Define the background style for the banner section
    const bgStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    };
    return (
    // Render the component's content
    _jsx("section", { className: "flex flex-col mx-auto w-full lg:w-5/6 max-w-[1200px] px-[1.5rem] lg:px-[2.5rem] pt-10 mb-10 overflow-hidden", children: _jsxs("div", { className: "w-full h-auto flex flex-col lg:flex-row", children: [_jsxs("div", { className: "bg-slate-300 w-full lg:w-1/2 px-20 py-24", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "Creative harmonious living" }), _jsx("p", { className: "text-xl font-medium mb-6", children: "RAOUF Products are all made to standard sizes so that you can mix and match them freely." }), _jsx(Link, { to: "/categories/all", onClick: () => window.scroll(0, 0), className: "uppercase bg-black text-white py-3 px-5 font-bold", children: "Shop now" })] }), _jsx("div", { className: "w-full lg:w-1/2", style: Object.assign(Object.assign({}, bgStyle), { backgroundImage: `url(${bannerImg})` }) })] }) }));
};
export default Banner;
