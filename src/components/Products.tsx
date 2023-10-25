import React from "react";
import ProductCardMP from "./ProductCardMP";
import useAppContext from "../utils/Maincontext.js";

/**
 * Products component displays a list of products using ProductCardMP components.
 * It retrieves filtered items from the application context and renders product cards.
 */
const Products: React.FC = () => {
  // Access the filteredItems from the application context.
  const { filteredItems } = useAppContext();

  return (
    <section className="w-screen h-auto mb-5">
      <div className="flex flex-col mx-auto w-full lg:w-5/6 max-w-[1200px] px-[2.5rem] lg:px-[2.5rem] pt-10">
        <h1 className="text-3xl font-semibold mb-5 text-center lg:text-left">
          Products we are proud of
        </h1>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <ProductCardMP
              key={item.id}
              img={item.img}
              name={item.description}
              price={item.price}
              id={item.id}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
