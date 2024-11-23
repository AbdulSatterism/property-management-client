import { Link } from "react-router-dom";
import { TProducts } from "../../types/types";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Rating from "react-rating";

const Product = (item: TProducts) => {
  const { name, price, image, rating } = item;
  return (
    <div
    data-aos="zoom-in-up"
    className="mx-auto card w-96 shadow-lg border border-gray-300 rounded-lg"
  >
    <figure className="bg-gray-800 rounded-t-lg">
      <img className="w-96 h-[320px] object-cover rounded-t-lg" src={image} alt={name} />
    </figure>
    <div className="card-body bg-gray-900 text-white p-6">
      <h2 className="card-title justify-center text-indigo-300 text-2xl text-center  font-bold mb-2">
        {name}
      </h2>
     
     <div className="flex justify-between ">
     <div>
     <p className="text-indigo-300  font-semibold text-xl mb-2">
        Category: land
      </p>
      
      <p className="text-indigo-300 text-xl font-semibold mb-4">
        Rating:{" "}
        {/* @ts-expect-error there is no type declaration file for react rating */}
        <Rating
          initialRating={rating | 0}
          emptySymbol={<span className="text-gray-600 text-2xl">☆</span>}
          fullSymbol={<span className="text-yellow-400 text-2xl">★</span>}
        />
      </p>
     </div>
      
   <div>
   <p className="text-white text-xl font-extrabold mb-4">
        Price: ${price}
      </p>
      
      {/* <p className={`text-${available ? 'green-400' : 'red-500'} text-lg font-semibold mb-4`}>
        {available ? 'Available' : 'Out of Stock'}
      </p> */}
      <p className={`text-green-400  text-lg font-semibold mb-4`}>
       Available
      </p>    

   </div>
   </div>
      
      <div className="card-actions justify-end">
        <Link to="#">
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-xl text-white py-2 px-4 rounded-md flex items-center shadow-md">
            Details
            <MdOutlineKeyboardDoubleArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  </div>
  

   
  );
};

export default Product;
