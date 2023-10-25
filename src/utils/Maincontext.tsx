import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { items } from '../utils/AllItems'

interface AppContextType {
  menuOpenHandler: () => void;
  menuOpened: boolean;
  firstItem: number;
  prevSlide: () => void;
  nextSlide: () => void;
  windowWidth: number;
  prevFirstItem: number;
  whichWayShouldGo: number;
  handleBtnName: (e: string) => void;
  btnName: string;
  itemIDandCategory: [number, string];
  setItemIDandCategory: React.Dispatch<React.SetStateAction<[number, string]>>;
  quantity: number;
  increase: () => void;
  decrease: () => void;
  cartOpened: boolean;
  cartOpenHandler: () => void;
  addToCart: (
    id: number,
    quantity: number,
    price: number,
    totalPrice: number
  ) => void;
  cart: { id: number; quantity: number; price: number; totalPrice: number }[];
  removeItem: (id: number) => void;
  cartIncrease: (id: number) => void;
  cartDecrease: (id: number) => void;
  filteredItems: { id: number; category: string; img: string; description: string; price: number; otherImgs: string[]; specs: string; texture: string; weight: string; size: string; }[];
  totalQuantity: number;
  // Ide az exportok type defje
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default useAppContext;

export function AppProvider({ children }: { children: ReactNode }) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [firstItem, setFirstItem] = useState<number>(0); // Change the initial value to 0
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [prevFirstItem, setPrevFirstItem] = useState<number>(0);
  const [whichWayShouldGo, setWhichWayShouldGo] = useState<number>(0);
  const [btnName, setBtnName] = useState<string>("All");
  const [itemIDandCategory, setItemIDandCategory] = useState<[number, string]>([
    1,
    "alma",
  ]);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<
    { id: number; quantity: number; price: number; totalPrice: number }[]
  >([]);
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const [totalQuantity, setTotalQuantity] = useState<number>(0)

  useEffect(() => {
    const numberOfItems = cart.reduce((total, item) => total + item.quantity, 0)
    setTotalQuantity(numberOfItems)
  }, [cart])

  useEffect(() => {
    setQuantity(1);
  }, [itemIDandCategory]);

  const cartOpenHandler = () => {
    setCartOpened((prev) => !prev);
  };

  const addToCart: (
    id: number,
    quantity: number,
    price: number,
    totalPrice: number
  ) => void = (id, quantity, price, totalPrice) => {
    if (cart) {
      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  totalPrice: item.totalPrice + totalPrice,
                }
              : item
          )
        );
      } else {
        setCart((prevCart) => [
          ...prevCart,
          { id, quantity, price, totalPrice },
        ]);
        setQuantity(1);
      }
    } else {
      setCart([{ id, quantity, price, totalPrice }]);
      setQuantity(1);
    }
  };

  const cartIncrease = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      )
    );
  };

  const cartDecrease = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * (item.quantity - 1),
              }
            : (() => {
                const updatedCart = cart.filter((item) => item.id !== id);
                setCart(updatedCart);
                return item;
              })()
          : item
      )
    );
  };

  const removeItem = (id: number) => {
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

  const handleBtnName = (e: string): void => {
    setBtnName(e);
  };

  useEffect(() => {
    if (firstItem > prevFirstItem) {
      setWhichWayShouldGo(1);
    } else if (firstItem < prevFirstItem) {
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
    } else {
      console.log("Elérted a végét");
    }
  };

const filteredItems = items.filter((item) => item.id <= 8)

  const nextSlide = () => {
    if (firstItem + 4 < filteredItems.length - 1) {
      // Check if firstItem is less than the last index
      setFirstItem((prev) => prev + 1);
    } else {
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

  const contextValue: AppContextType = {
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

  return (
    <AppContext.Provider value={contextValue}> {children} </AppContext.Provider>
  );
}

export { AppContext };
