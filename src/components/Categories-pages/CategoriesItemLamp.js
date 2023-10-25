import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { items } from '../../utils/AllItems';
import { Link } from 'react-router-dom';
import useAppContext from '../../utils/Maincontext.js';
const CategoriesItemLamp = () => {
    const { setItemIDandCategory } = useAppContext();
    const filteredItems = items.filter((item) => item.category === "lamp");
    return (_jsx("section", { className: 'w-screen h-auto flex flex-col items-start justify-center', children: _jsx("div", { className: 'mx-auto max-w-[1200px] px-[19px]', children: _jsx("div", { className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4', children: filteredItems.map((item) => (_jsx("div", { className: 'border-2 border-gray-400 hover:border-black p-2', onClick: () => setItemIDandCategory([item.id, item.category]), children: _jsxs(Link, { to: `/categories/products/${item.id}`, children: [_jsx("div", { children: _jsx("img", { src: item.img, alt: item.description }) }), _jsxs("div", { children: [_jsx("p", { className: 'font-medium', children: item.description }), _jsxs("p", { className: 'font-bold text-xl', children: [item.price, "$"] })] })] }) }, item.id))) }) }) }));
};
export default CategoriesItemLamp;
