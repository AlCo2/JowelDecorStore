import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react'
import { BsTrashFill } from 'react-icons/bs';

const Checkout = () => {

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
                    <tr className=''>
                      <td className='flex gap-4 items-center p-2'><img width={60} src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" alt="" />Product</td>
                      <td className='text-center'>12</td>
                      <td>$1779</td>
                      <td className='text-red-500'><BsTrashFill/></td>
                    </tr>
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