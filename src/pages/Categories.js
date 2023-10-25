import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CategoriesHeader from '../components/CategoriesHeader';
import { Outlet } from 'react-router-dom';
const Categories = () => {
    return (_jsxs(_Fragment, { children: [_jsx(CategoriesHeader, {}), _jsx(Outlet, {})] }));
};
export default Categories;
