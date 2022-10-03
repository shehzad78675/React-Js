import Category from '../components/Category';
import React from 'react';
import {ApiCategories} from '../api/CategoryApi';

function Categories() {
  return (
    <div className='flex justify-between items-center p-5 mobile:flex-col sm:flex-col'>
        {ApiCategories.map((category, index)=> {
            return (

                <Category item={category} key={index}/>
            )
})}
    </div>
  )
}

export default Categories