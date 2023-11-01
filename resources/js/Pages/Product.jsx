import FixedRating from '@/Components/FiexedRating';
import Navbar from '@/Components/Navbar';
import RatingBar from '@/Components/Rating';
import { router, usePage } from '@inertiajs/react';
import { Chip, Rating } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { BsEyeglasses, BsPlus } from 'react-icons/bs';

const Product = () => {
  const { product } = usePage().props;
  const {categories} = usePage().props;
  const { auth } = usePage().props;
  const [track_Q, setTrack_Q] = useState(0);  
  const addToCart = async () =>{
    if(!auth.user){
      router.post('/createorder')      
      return;
    }
    const values = {
      product_id:product.id,
      user_id:auth.user.id,
      product_price:product.price,
    }
    await axios.post("/createorder", values);
    setTrack_Q(track_Q+1);
  }

  return (
    <>
      <Navbar track_Q={track_Q}/>
      <div className='mt-10 pl-10'>

      </div>
      <div className='flex justify-center'>
        <div className='w-96 h-96 text-center'>
          <img className='border-2 border-black rounded-lg' src={`../images/${product.image}`} alt="" />
          <RatingBar />
          <div className='flex gap-x-4 flex-wrap justify-center'>
            {categories.map(category=>(
              <Chip label={category.name}/>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-5 pl-10'>
          <div className='border-b-2 border-black border-opacity-20'>
            <div>
              <p className='font-medium font-poppins text-lg'>{product.title}</p>
            </div>
            <div>
              <FixedRating/>
            </div>
          </div>
          <div className='w-72'>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae velit, neque eos adipisci voluptate eaque expedita minima eligendi voluptatum deserunt nemo dignissimos, recusandae tempora consequuntur cupiditate quis iusto ex!</p>
          </div>
          <div className='flex gap-2'>
            <p className='font-opensans'>Price:</p>
            <p className='mt-2 text-xl'>${product.price}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <button className='bg-blue-600 border-2 border-blue-600 w-56 p-2 rounded-md text-white font-poppins font-medium flex justify-center items-center gap-2'><BiShoppingBag/>Buy Now</button>
            <button onClick={addToCart} className='bg-teal-400 border-2 border-teal-400 w-56 p-2 rounded-md text-white font-poppins font-medium flex justify-center items-center gap-2'><BsPlus/>Add To Cart</button>
            <button className='bg-white w-56 p-2 rounded-md text-blue-500 border-blue-500 border-2 font-poppins font-medium flex justify-center items-center gap-2'><BsEyeglasses/>Add To Watch List</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;