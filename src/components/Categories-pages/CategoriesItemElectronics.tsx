// Import necessary dependencies and components
import React from 'react';
import { items } from '../../utils/AllItems'; // Import the 'items' data
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' for navigation
import useAppContext from '../../utils/Maincontext.js'; // Import the 'useAppContext' hook

// Define the CategoriesItemElectronics functional component
const CategoriesItemElectronics = () => {
  // Use the 'useAppContext' hook to access the 'setItemIDandCategory' function from the context
  const { setItemIDandCategory } = useAppContext();

  // Define the structure of an 'Item' and filter items with the 'category' of 'electronic'
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
  const filteredItems: Item[] = items.filter((item: Item) => item.category === "electronic");

  return (
    // Render the component's content
    <section className='w-screen h-auto flex flex-col items-start justify-center'>
      <div className='mx-auto max-w-[1200px] px-[19px]'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4'>
          {/* Map through the 'filteredItems' array to render individual electronic items */}
          {filteredItems.map((item) => (
            <div key={item.id} className='border-2 border-gray-400 hover:border-black p-2' onClick={() => setItemIDandCategory([item.id, item.category])}>
              <Link to={`/categories/products/${item.id}`}> {/* Create a link to the electronic item's detail page */}
                <div>
                  <img src={item.img} alt={item.description} /> {/* Display the electronic item's image with a description */}
                </div>
                <div>
                  <p className='font-medium'>{item.description}</p> {/* Display the electronic item's description */}
                  <p className='font-bold text-xl'>{item.price}$</p> {/* Display the electronic item's price */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export the CategoriesItemElectronics component as the default export
export default CategoriesItemElectronics;
