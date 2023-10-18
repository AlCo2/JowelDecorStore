import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { BsTrashFill } from 'react-icons/bs';
import axios from 'axios';

const Checkout = ({children}) => {
  const { products } = usePage().props;
  const [data, setData] = useState(products);
  const { auth } = usePage().props;
  const deleteItem = async (product_id) =>{
  const values = {
    product_id:product_id,
    user_id:auth.user.id,
  }
  await axios.post("/deleteproduct", values);
  const newData = data.filter((product)=>product.id !== product_id);
  setData(newData);
  }
  const Order = ({id,name, price, Q}) =>{
    return(
    <tr className=''>
      <td className='flex gap-4 items-center p-2'><img width={60} className='rounded-sm'  src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" alt="" />{name}</td>
      <td className='text-center'>{Q}</td>
      <td>${price}</td>
      <td className='text-red-500'><BsTrashFill className='cursor-pointer' onClick={()=>deleteItem(id)} /></td>
    </tr>
    )
  }
  const OrderSummary = () =>{
    return (
      <div className='h-52 w-64 bg-white rounded-md'>
              <div className='ml-4 my-4'>
                <p className='font-poppins font-bold text-lg'>Order Summary</p>
              </div>
              <hr />
              <div className='ml-4'>
                <div className='flex justify-between items-center mb-2'>
                  <p className='opacity-60 font-opensans'>Discount</p>
                  <p className='font-poppins text-sm mr-4'>$00.00</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <p className='opacity-60 font-opensans'>Delivery</p>
                  <p className='font-poppins text-sm mr-4'>$29.99</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <p className='opacity-60 font-opensans'>Tax</p>
                  <p className='font-poppins text-sm mr-4'>$39.99</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='opacity-60 font-opensans'>Total</p>
                  <p className='font-poppins font-semibold mr-4'>$1879.93</p>
                </div>
              </div>
            </div>
    )
  }


  return (
    <>
        <Navbar/>
        <div className='w-full min-h-screen flex justify-center bg-gray-200'>
          <div className='w-11/12 flex justify-between my-10'>
            <div className='w-9/12 bg-white rounded-md h-fit'>
              <div className='ml-8 my-4'>
                <p className='font-poppins font-bold text-xl'>Shopping Cart</p>
              </div>
              <hr />
              <div className='ml-8 mt-4'>
                <table className='w-11/12'>
                  <thead className='h-10'>
                    <tr>
                      <th className='font-opensans text-start text-sm opacity-80'>Product</th>
                      <th className='font-opensans text-sm opacity-80'>Quantity</th>
                      <th className='font-opensans text-start text-sm opacity-80'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(product=>(
                      <Order key={product.id} id={product.id} name={product.title} price={product.price} Q={product.Q}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <OrderSummary/>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Checkout;