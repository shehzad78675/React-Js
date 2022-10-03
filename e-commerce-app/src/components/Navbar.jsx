import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import React from "react";
import {useSelector} from 'react-redux';

function Navbar() {

  const products = useSelector((state)=> state.cart);

  const styleRight = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px] sm-ml-[10px] md:ml-[10px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper px-[20px] py-[10px] flex justify-between items-center mobile:px-0 sm:px-0 md:px-0">
        {/* Left */}
        <div className="flex flex-1 items-center">
          <div className="cursor-pointer text-[16px] mobile:hidden sm:hidden md:hidden">En</div>
          <div className="border-2 border-solid border-gray-300 p-[5px] rounded-md ml-[10px] focus-within:border-purple-500 flex items-center transition-all">
            <input type="text" className="outline-none mobile:w-[50px] sm:w-[50px] md:w-[120px]" />
            <Search className="cursor-pointer" />
          </div>

          {/* Center */}
        </div>
        <div className="flex-1 text-center">
          <div className="font-bold text-lg cursor-pointer mobile:text-sm sm:text-sm md:text-sm">
            <Link to='/'>Summer Kings</Link>
            </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 items-center justify-end mobile:flex-[1.5] sm:flex-[1.5] mobile:justify-center sm:justify-center md:justify-center">
        <div className={styleRight}>
          <Link to='/'>Home</Link> 
          </div>
        <div className={styleRight}>
          <Link to='/categories'>Products</Link> 
          </div>
        {/* <div className={styleRight}>
          <Link to='./products'>Products</Link>
        </div> */}
          
          <div className={styleRight}>
            <Link to='/register'>Rigister</Link>
          </div>
          <div className={styleRight}>
            <Link to='/login'>Sign In</Link>
          </div>
          <div className={styleRight}>
            <Badge badgeContent={products.cart.length} color="primary">
              <Link to='/cart'> <ShoppingCartOutlined /></Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
