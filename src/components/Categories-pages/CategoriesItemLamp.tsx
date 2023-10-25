import React from 'react';
import { items } from '../../utils/AllItems';
import { Link } from 'react-router-dom';
import useAppContext from '../../utils/Maincontext.js';

const CategoriesItemLamp = () => {

  const { setItemIDandCategory } = useAppContext()

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

  const filteredItems: Item[] = items.filter((item: Item) => item.category === "lamp");


  return (
    <section className='w-screen h-auto flex flex-col items-start justify-center'>
      <div className='mx-auto max-w-[1200px] px-[19px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4'>
        {filteredItems.map((item) => (
          <div key={item.id} className='border-2 border-gray-400 hover:border-black p-2' onClick={() => setItemIDandCategory([item.id, item.category])}>
            <Link to={`/categories/products/${item.id}`}>
              <div>
                <img src={item.img} alt={item.description} />
              </div>
              <div>
                <p className='font-medium'>{item.description}</p>
                <p className='font-bold text-xl'>{item.price}$</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default CategoriesItemLamp;
