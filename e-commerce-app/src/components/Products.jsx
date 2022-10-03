import React, { useEffect, useState } from 'react';
import Product from './Product';
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';
import {addProduct} from '../store/wishListSlice';

function Products() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      console.log(data)
      setProducts(data);
    };

    fetchProducts();
  },[])

  const handleAddToCart = (product) => {
    const payload = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      color: 'red',
      size: 'medium',
      quantity: 1,
    }
    dispatch(add(payload))
  }

  const handleAddToWishList = (product) => {
    const payload = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      color: 'red',
      size: 'medium'
    }
    dispatch(addProduct(payload))
  }
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
        {products.map((product, index) => (
            <Product item={product} handleAddToCart={handleAddToCart} handleAddToWishList={handleAddToWishList} key={index}/>
        ))}
    </div>
  )
}

export default Products