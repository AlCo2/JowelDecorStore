import Navbar from '@/Components/Navbar';
import { usePage } from '@inertiajs/react';
import React from 'react'

const Product = () => {
  const { product } = usePage().props;
  return (
    <>
      <Navbar/>
      <div className='flex'>
        <div className='w-96'>
          <img src={`../images/${product.image}`} alt="" />
        </div>
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.Q}</p>
        </div>
      </div>
    </>
  )
}

export default Product;