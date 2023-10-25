import React from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../utils/Maincontext.js'

const ProductCardMP: React.FC<{ img: string, name: string, price: number, id: number, category: string }> = ({ img, name, price, id, category }) => {
  // Access the setItemIDandCategory function from the application context.
  const { setItemIDandCategory } = useAppContext();

  return (
    <Link
      to={`categories/products/${id}`}
      onClick={() => {
        // Set the item ID and category in the application context.
        setItemIDandCategory([id, category]);

        // Scroll to the top of the page.
        window.scrollTo(0, 0);
      }}
    >
      <article className='h-auto w-full border-2 border-slate-400 hover:border-black p-2 transition-all duration-400'>
        <img src={img} alt={name} />
        <h1 className='text-xl font-light mb-2'>{name}</h1>
        <h1 className='font-bold text-xl'>{price}$</h1>
      </article>
    </Link>
  );
}

export default ProductCardMP;