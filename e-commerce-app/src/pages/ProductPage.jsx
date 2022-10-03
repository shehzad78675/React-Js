import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter";
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';

function ProductPage() {
  const [product, setProduct] = useState([]);
  const quantity = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      const newProduct = await data.find((item) => item.id === parseInt(id));
      setProduct(newProduct);
    };

    fetchProducts();
  },[]);

  const handleSize = (event) => {
    setSize(event.target.value);
  }

  const handleColor = (selectColor) => {
    setColor(selectColor);
  }

  const handleAddToCart = () => {
    if(color === '' || size === ''){
      alert('Please select color and size!');
      return;
    }
    const payload = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      color,
      size,
      quantity: quantity[0]
    };

    dispatch(add(payload));
  }

  return (
    <div>
      <div className="flex justify-center mobile:flex-col m-5">
        <div className="flex flex-1 items-center justify-center mobile:mt-5">
          <img
            src={product.images}
            alt="product_image"
            className="w-[80%] h-[90%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:p-5">
          <h1 className="text-[40px]">{product.title}</h1>
          <p className="pr-[4rem] text-justify mt-4">{product.description}</p>
          <p className="mt-7 text-3xl">
            Price: <b>${product.price}</b>
          </p>

          <div className="flex text-2xl mt-7">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full p-[10px] ml-5 border-2 cursor-pointer hover:border-purple-600" onClick={() => handleColor('red')}></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full p-[10px] ml-5 border-2 cursor-pointer hover:border-purple-600" onClick={() => handleColor('blue')}></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full p-[10px] ml-5 border-2 cursor-pointer hover:border-purple-600" onClick={() => handleColor('yellow')}></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select name="" id="" className="ml-5 border-2" onChange={handleSize}>
              <option value="">
                --Select--
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="mt-7">
            <div className="flex items-center justify-center text-2xl">
              Quantity
              <Counter quantity={quantity} pageName={'productPage'}/>
            </div>
          </div>
          <button className="btn my-5" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
