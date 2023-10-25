import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import useAppContext from '../utils/Maincontext.js';
const ProductCardMP = ({ img, name, price, id, category }) => {
    // Access the setItemIDandCategory function from the application context.
    const { setItemIDandCategory } = useAppContext();
    return (_jsx(Link, { to: `categories/products/${id}`, onClick: () => {
            // Set the item ID and category in the application context.
            setItemIDandCategory([id, category]);
            // Scroll to the top of the page.
            window.scrollTo(0, 0);
        }, children: _jsxs("article", { className: 'h-auto w-full border-2 border-slate-400 hover:border-black p-2 transition-all duration-400', children: [_jsx("img", { src: img, alt: name }), _jsx("h1", { className: 'text-xl font-light mb-2', children: name }), _jsxs("h1", { className: 'font-bold text-xl', children: [price, "$"] })] }) }));
};
export default ProductCardMP;
