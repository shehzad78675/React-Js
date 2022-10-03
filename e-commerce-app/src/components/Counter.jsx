import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from '../store/cartSlice';

function Counter({quantity, pageName, product}) {
  const dispatch = useDispatch();

  const handleQuantityDecrease = () => {
    pageName === 'cart' ? dispatch(decreaseQuantity(product)) : quantity[1](quantity[0] - 1);
  }

  const handleQuantityIncrease = () => {
    pageName === 'cart' ? dispatch(increaseQuantity(product)) : quantity[1](quantity[0] + 1);
    
  }
  console.log(product); 
  return (
    <div>
        <div className="ml-5 shadow-md flex">
          <button className="bg-purple-600 text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md hover:bg-purple-800" onClick={handleQuantityDecrease} disabled={quantity[0] === 1 ? true : false}>
            -
          </button>
          <div className="w-8 flex items-center justify-center border-[1px] border-purple-600">
            {pageName === 'productPage' ? quantity[0] : quantity}
          </div>
          <button className="bg-purple-600 text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md hover:bg-purple-800" onClick={ handleQuantityIncrease }>
            +
          </button>
        </div>
      </div>
  );
}

export default Counter;
