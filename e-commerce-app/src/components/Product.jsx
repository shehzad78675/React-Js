import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product({ item, handleAddToCart, handleAddToWishList }) {
  const [hoverEffect, setHoverEffect] = useState("opacity-0");

  const handleHoverEnter = () => {
    setHoverEffect("opacity-1 bg-[rgba(0,0,0,0.2)]");
  };

  const handleHoverExit = () => {
    setHoverEffect("opacity-0");
  };

  // console.log(item.rating.rate)

  const iconsStyle =
    "w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 ";

  return (
    <div className="flex-1 flex flex-col rounded-md shadow-md min-h-[300px] m-2">
      <div
        className="flex flex-1 flex-col justify-center min-w-[250px] min-h-[220px] m-2 overflow-hidden rounded-md shadow-lg relative"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverExit}
      >
        <img src={item.images[0]} alt="product_image" />

        <div
          className={`flex justify-center items-center w-[100%] h-[100%] absolute ease-in duration-100 ${hoverEffect}`}
        >
          {/* Icons */}
          <div className={iconsStyle}>
            <ShoppingCartOutlined
              onClick={() => {
                handleAddToCart(item);
              }}
            />
          </div>
          <div className={iconsStyle}>
            <FavoriteBorderOutlined onClick={() => handleAddToWishList(item)}/>
          </div>
          <Link to={`/categories/${item.id}`}>
          <div className={iconsStyle}>
            <SearchOutlined />
          </div>
          </Link>
        </div>
        {/* <div>Price:30</div> */}
      </div>
      <Link to={`/categories/${item.id}`} className="cursor-pointer">

      <div className="m-5">
        <p>{item.title}</p>
      </div>
      {/* <div className="flex justify-between m-3">
        <Rating
          name={`half-rating-read-${item.id}`}
          defaultValue={1}
          value={item.rating.rate}
          precision={0.1}
          readOnly
        /> */}
      
        <p className="mr-5 mb-3 text-end">Price: <span className="ml-3 font-bold">${item.price}</span></p>
      {/* </div> */}
      </Link>
    </div>
  );
}

export default Product;
