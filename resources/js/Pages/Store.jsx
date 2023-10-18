import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Button } from '@mui/material';
import React, { useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';
import axios from 'axios';
import { router, usePage } from '@inertiajs/react';

const Store = ({children}) => {
  const { data } = usePage().props;
  const { auth } = usePage().props;
  const addToCart = async (id, price) =>{
    if(!auth.user){
      router.post('/createorder')      
      return;
    }
    const values = {
      product_id:id,
      user_id:auth.user.id,
      product_price:price,
    }
    await axios.post("/createorder", values);
  }
  //cart Item:
  const ItemDiv = ({id, image, title, price, stock}) =>{
    return (
      <div className='border-2 w-56 h-64 rounded-lg duration-300 hover:cursor-pointer'>
        <div className='w-full h-3/5 bg-cover bg-center' /*style={{backgroundImage:`URL('${image}')`}}*/ ></div>
        <div className='ml-4 mt-2'><p className='font-poppins font-semibold text-sm'>{title}</p></div>
        <div className='ml-4 mt-2'><p className='font-poppins font-bold text-base opacity-70'>${price}</p></div>
        <div className='ml-4 flex justify-between items-center'>
        <div><p className='text-sm'>Stock: {stock}</p></div>
          <div className='mr-2'>
            <Button color='primary' onClick={()=>addToCart(id, price)} size='small' variant='contained'><BsFillCartPlusFill/>ADD</Button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
        <Navbar page={"Store"}/>
        <div>
          <div className='mt-10 ml-28 flex justify-between items-center'>
            <div>
              <p className='font-poppins font-medium text-xl'>Products</p>
            </div>
            <div>
              <input type="text" placeholder='Search Product...' name="" id="" className='rounded-xl border-none bg-gray-300 bg-opacity-25 mr-52 w-72'/>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-5/6 min-h-screen p-2 mt-10 flex flex-wrap gap-4'>
              {data.map(product=>(
                <ItemDiv key={product.id} id={product.id} title={product.title} price={product.price} stock={product.Q} />
              ))}
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Store;