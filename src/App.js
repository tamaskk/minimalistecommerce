import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Categories from './pages/Categories.js';
import All from './components/Categories-pages/All.js';
import Chairs from './components/Categories-pages/Chairs.js';
import Furnitures from './components/Categories-pages/Furnitures.js';
import Electronics from './components/Categories-pages/Electronics.js';
import Lamp from './components/Categories-pages/Lamp.js';
import Kitchen from './components/Categories-pages/Kitchen.js';
import Skincare from './components/Categories-pages/Skincare.js';
import ProductPage from './pages/ProductPage.js';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: `App overflow-x-hidden`, children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Index, {}) }), _jsxs(Route, { path: 'categories', element: _jsx(Categories, {}), children: [_jsx(Route, { path: 'all', element: _jsx(All, {}) }), _jsx(Route, { path: 'furnitures', element: _jsx(Furnitures, {}) }), _jsx(Route, { path: 'electronics', element: _jsx(Electronics, {}) }), _jsx(Route, { path: 'lamp', element: _jsx(Lamp, {}) }), _jsx(Route, { path: 'kitchen', element: _jsx(Kitchen, {}) }), _jsx(Route, { path: 'chairs', element: _jsx(Chairs, {}) }), _jsx(Route, { path: 'skin-care', element: _jsx(Skincare, {}) })] }), _jsx(Route, { path: 'categories/products/:id', element: _jsx(ProductPage, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
