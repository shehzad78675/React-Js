import React from 'react';
import Products from '../components/Products';

function CategoryPage() {
  return (
    <div>
            <div className='flex flex-col p-3'>
              <h1 className='text-[30px]'>Men's cloth</h1>
              <div className='flex items-center justify-between mt-3'>
                <div className='flex mobile:flex-col'>
                  <p>Filter by</p>
                  <select name="" id="" className='ml-3 border-2 border-[silver]'>
                    <option>Selected</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="marge">Large</option>
                  </select>
                  <select name="" id="" className='ml-3 border-2 border-[silver] mobile:mt-3'>
                    <option>Color</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                  </select>
                </div>
                <div className='flex'>
                  <p>Sort by</p>
                  <select name="" id="" className='ml-3 border-2 border-[silver]'>
                    <option value="newset">Newset (first)</option>
                    <option value="oldset">Oldset (first)</option>
                    <option value="price_asc">Price (Asc)</option>
                    <option value="price_dec">Price (Des)</option>
                  </select>
                </div>
              </div>
            </div>
            <Products/>
    </div>
  )
}

export default CategoryPage