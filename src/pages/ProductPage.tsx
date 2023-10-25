import React, { useState } from "react";
import { items } from "../utils/AllItems";
import useAppContext from "../utils/Maincontext.js";
import Slider from "../components/Slider";

const ProductPage = () => {
  // Define the 'Item' interface for the product data
  interface Item {
    id: number;
    category: string;
    img: string;
    description: string;
    price: number;
    otherImgs: string[];
    specs: string;
    texture: string;
    weight: string;
    size: string;
  }

  // State for the main product image
  const [imgSrc, setImgSrc] = useState<string>();

  // Access context functions and state using the 'useAppContext' hook
  const { itemIDandCategory, increase, decrease, quantity, addToCart } = useAppContext();

  // Filter the items to get information about the selected product
  const filteredItemInfo = items.filter((item) => item.id === itemIDandCategory[0]);

  // Filter items in the same category as the selected product
  const filteredItemCategory: Item[] = items.filter(
    (item: Item) => item.category === itemIDandCategory[1]
  );

  return (
    <div>
      {filteredItemInfo.map((item) => (
        <div
          key={item.id}
          className="h-auto items-center justify-center text-center max-w-[1200px] mx-auto relative mb-40"
        >
          <h1
            className="text-4xl font-semibold mt-10 relative z-10"
            style={{ lineHeight: 1.5 }}
          >
            {item.description} {/* Product name */}
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 h-full">
            {/* Left side of the product details */}
            <div className="w-full h-auto flex flex-col items-center justify-start px-20 mb-20 lg:mb-0">
              {/* Main product image */}
              <img src={imgSrc ?? item.img} className="w-full" alt={item.description} />
              {/* Product image gallery */}
              <div className="grid grid-cols-3 items-center gap-8 w-full mt-10 -mb-14">
                {/* Image thumbnails for the gallery */}
                <img
                  src={item.img}
                  onMouseOver={() => setImgSrc(item.img)}
                  className="border border-white hover:border-blue-400"
                />
                {/* Additional image thumbnails */}
                <img
                  src={item.otherImgs[0]}
                  onMouseOver={() => setImgSrc(item.otherImgs[0])}
                  className="border border-white hover:border-blue-400"
                />
                <img
                  src={item.otherImgs[1]}
                  onMouseOver={() => setImgSrc(item.otherImgs[1])}
                  className="border border-white hover:border-blue-400"
                />
              </div>
            </div>
            {/* Right side of the product details */}
            <div className="bg-gray-300 w-full h-fit -mt-14 lg:px-20 flex flex-col items-center justify-end lg:pt-40 max-w-fit p-10 lg:p-0">
              <p className="text-xl font-medium">{item.specs} {/* Product specifications */}</p>
              <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-10 mb-6">
                <h1 className="text-2xl font-bold">Quantity</h1>
                <div className="flex items-center justify-center py-5">
                  {/* Buttons to increase/decrease product quantity */}
                  <button onClick={decrease} className="px-4 py-1 bg-white text-black border border-black text-4xl">
                    - {/* Decrease quantity */}
                  </button>
                  <div className="px-5 py-1 bg-gray-200 text-black border border-black text-4xl">
                    {quantity} {/* Display current quantity */}
                  </div>
                  <button onClick={increase} className="px-4 py-1 bg-white text-black border border-black text-4xl">
                    + {/* Increase quantity */}
                  </button>
                </div>
                <h1 className="text-2xl font-bold">{quantity * item.price}$</h1> {/* Total price */}
              </div>
              <div className="grid grid-cols-2 gap-8 w-full mb-0 lg:mb-16">
                <button
                  onClick={() => addToCart(item.id, quantity, item.price, quantity * item.price)}
                  className="text-xl bg-transparent border-2 border-black text-black uppercase py-4 font-semibold hover:bg-black hover:text-white duration-300 transition-all"
                >
                  Add to Cart {/* Button to add to cart */}
                </button>
                <button
                  className="text-xl border-2 border-red-600 bg-red-600 text-white uppercase py-4 font-semibold hover:bg-transparent hover:text-red-600 duration-300 transition-all"
                >
                  Buy now {/* Button to buy now */}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 px-5 lg:px-0">
            {/* Product details: Texture, Weight, Size */}
            <div className="bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              <h1 className="font-bold text-2xl">Texture:</h1>
              <p className="text-lg">{item.texture} {/* Product texture */}
              </p>
            </div>
            <div className="bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              <h1 className="font-bold text-2xl">Weight:</h1>
              <p className="text-lg">{item.weight} {/* Product weight */}
              </p>
            </div>
            <div className="bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              <h1 className="font-bold text-2xl">Size:</h1>
              <p className="text-lg">{item.size} {/* Product size */}
              </p>
            </div>
          </div>
          {/* Render a Slider component */}
          <Slider />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
