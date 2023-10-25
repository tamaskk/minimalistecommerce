import { jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
import { items } from '../utils/AllItems';
const AppContext = createContext(undefined);
const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
export default useAppContext;
export function AppProvider({ children }) {
    const [menuOpened, setMenuOpened] = useState(false);
    const [firstItem, setFirstItem] = useState(0); // Change the initial value to 0
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [prevFirstItem, setPrevFirstItem] = useState(0);
    const [whichWayShouldGo, setWhichWayShouldGo] = useState(0);
    const [btnName, setBtnName] = useState("All");
    const [itemIDandCategory, setItemIDandCategory] = useState([
        1,
        "alma",
    ]);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    useEffect(() => {
        const numberOfItems = cart.reduce((total, item) => total + item.quantity, 0);
        setTotalQuantity(numberOfItems);
    }, [cart]);
    useEffect(() => {
        setQuantity(1);
    }, [itemIDandCategory]);
    const cartOpenHandler = () => {
        setCartOpened((prev) => !prev);
    };
    const addToCart = (id, quantity, price, totalPrice) => {
        if (cart) {
            const existingItem = cart.find((item) => item.id === id);
            if (existingItem) {
                setCart((prevCart) => prevCart.map((item) => item.id === id
                    ? Object.assign(Object.assign({}, item), { quantity: item.quantity + quantity, totalPrice: item.totalPrice + totalPrice }) : item));
            }
            else {
                setCart((prevCart) => [
                    ...prevCart,
                    { id, quantity, price, totalPrice },
                ]);
                setQuantity(1);
            }
        }
        else {
            setCart([{ id, quantity, price, totalPrice }]);
            setQuantity(1);
        }
    };
    const cartIncrease = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id
            ? Object.assign(Object.assign({}, item), { quantity: item.quantity + 1, totalPrice: item.price * (item.quantity + 1) }) : item));
    };
    const cartDecrease = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id
            ? item.quantity > 1
                ? Object.assign(Object.assign({}, item), { quantity: item.quantity - 1, totalPrice: item.price * (item.quantity - 1) }) : (() => {
                const updatedCart = cart.filter((item) => item.id !== id);
                setCart(updatedCart);
                return item;
            })()
            : item));
    };
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };
    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };
    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleBtnName = (e) => {
        setBtnName(e);
    };
    useEffect(() => {
        if (firstItem > prevFirstItem) {
            setWhichWayShouldGo(1);
        }
        else if (firstItem < prevFirstItem) {
            setWhichWayShouldGo(2);
        }
        setPrevFirstItem(firstItem);
    }, [firstItem, prevFirstItem]);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    const menuOpenHandler = () => {
        setMenuOpened((prev) => !prev);
    };
    const prevSlide = () => {
        if (firstItem > 0) {
            // Check if firstItem is greater than 0
            setFirstItem((prev) => prev - 1);
        }
        else {
            console.log("Elérted a végét");
        }
    };
    const filteredItems = items.filter((item) => item.id <= 8);
    const nextSlide = () => {
        if (firstItem + 4 < filteredItems.length - 1) {
            // Check if firstItem is less than the last index
            setFirstItem((prev) => prev + 1);
        }
        else {
            console.log("Elérted a végét");
        }
    };
    useEffect(() => {
        // Add the event listener when the component mounts
        window.addEventListener("resize", handleResize);
        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // Ide jönnek majd a kódok
    const contextValue = {
        menuOpenHandler,
        menuOpened,
        firstItem,
        prevSlide,
        nextSlide,
        windowWidth,
        prevFirstItem,
        whichWayShouldGo,
        handleBtnName,
        btnName,
        itemIDandCategory,
        setItemIDandCategory,
        quantity,
        increase,
        decrease,
        cartOpened,
        cartOpenHandler,
        addToCart,
        cart,
        removeItem,
        cartIncrease,
        cartDecrease,
        filteredItems,
        totalQuantity
        // Ide jönnek majd az exportok
    };
    return (_jsxs(AppContext.Provider, { value: contextValue, children: [" ", children, " "] }));
}
export { AppContext };
