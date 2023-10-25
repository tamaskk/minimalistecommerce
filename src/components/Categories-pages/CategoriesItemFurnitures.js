import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { items } from '../../utils/AllItems'; // Import the 'items' data
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' for navigation
import useAppContext from '../../utils/Maincontext.js'; // Import the 'useAppContext' hook
// Define the CategoriesItemFurnitures functional component
const CategoriesItemFurnitures = () => {
    // Use the 'useAppContext' hook to access the 'setItemIDandCategory' function from the context
    const { setItemIDandCategory } = useAppContext();
    const filteredItems = items.filter((item) => item.category === "furniture");
    return (
    // Render the component's content
    _jsx("section", { className: 'w-screen h-auto flex flex-col items-start justify-center', children: _jsx("div", { className: 'mx-auto max-w-[1200px] px-[19px]', children: _jsx("div", { className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4', children: filteredItems.map((item) => (_jsx("div", { className: 'border-2 border-gray-400 hover:border-black p-2', onClick: () => setItemIDandCategory([item.id, item.category]), children: _jsxs(Link, { to: `/categories/products/${item.id}`, children: [" ", _jsxs("div", { children: [_jsx("img", { src: item.img, alt: item.description }), " "] }), _jsxs("div", { children: [_jsx("p", { className: 'font-medium', children: item.description }), " ", _jsxs("p", { className: 'font-bold text-xl', children: [item.price, "$"] }), " "] })] }) }, item.id))) }) }) }));
};
// Export the CategoriesItemFurnitures component as the default export
export default CategoriesItemFurnitures;
