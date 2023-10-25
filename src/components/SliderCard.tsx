import { Link } from "react-router-dom";
import useAppContext from "../utils/Maincontext.js";

// Define the SliderCard component with specified props
const SliderCard: React.FC<{ img: string, name: string, price: number, id: number, category: string }> = ({ img, name, price, id, category }) => {
  
  // Access the 'setItemIDandCategory' function from the app context using 'useAppContext'
  const { setItemIDandCategory } = useAppContext();

  // Define CSS style for the background image of the card
  const bgStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${img})`
  };

  return (
    <Link to={`/categories/products/${id}`} onClick={() => {
      // Call 'setItemIDandCategory' with the product's ID and category and scroll to the top of the page
      setItemIDandCategory([id, category]);
      window.scrollTo(0, 0);
    }}>
      {/* Product card container */}
      <div className="cursor-pointer outline-2 outline-slate-300 hover:outline-slate-300 transition-all duration-300 border-2 border-slate-300 hover:border-black">
        <a href="#" className="decoration-none text-black">
          <div className='w-[14rem]'>
            {/* Product image */}
            <img src={img} alt={name} />
          </div>
          <div className="flex flex-col items-start justify-center text-[1.1rem] font-light p-[0.5rem]">
            {/* Product name */}
            <p>{name}</p>
            {/* Product price */}
            <p className="text-[1.3rem] font-bold mt-[1.4rem]">${price}</p>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default SliderCard;
