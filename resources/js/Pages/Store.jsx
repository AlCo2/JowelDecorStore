import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Button } from '@mui/material';
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';

const Store = () => {

  //cart Item:
  const ItemDiv = ({id, image, title, price, stock}) =>{
    return (
      <div className='border-2 w-56 h-64 rounded-lg hover:border-4 duration-300 hover:cursor-pointer'>
        <div className='w-full h-3/5 bg-cover bg-center' style={{backgroundImage:`URL('${image}')`}} ></div>
        <div className='ml-4 mt-2'><p className='font-poppins font-semibold text-sm'>{title}</p></div>
        <div className='ml-4 mt-2'><p className='font-poppins font-bold text-base opacity-70'>${price}</p></div>
        <div className='ml-4 flex justify-between items-center'>
        <div><p className='text-sm'>Stock: {stock}</p></div>
          <div className='mr-2'>
            <Button color='primary' href={`/store/${id}`} size='small' variant='contained'><BsFillCartPlusFill/>ADD</Button>
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
              <input type="text" placeholder='Search Product...' name="" id="" className='rounded-xl border-none bg-gray-300 bg-opacity-25 mr-80 w-72'/>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='w-5/6 min-h-screen p-2 mt-10 flex flex-wrap gap-4'>
              <ItemDiv id={1} title={"Nike DownShifter 12"} stock={20} price={300} image={"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"}/>
              <ItemDiv id={2} title={"trm-White Original"} stock={36} price={145} image={"https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false"}/>
              <ItemDiv id={3} title={"Bruton Trendy Sport"} stock={10} price={99} image={"https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)"}/>
              <ItemDiv id={4} title={"Nike Spark"} stock={14} price={134} image={"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-womens-shoes-w4WdlF.png"}/>
              <ItemDiv id={5} title={"Nike Omni Multi-Court"} stock={17} price={186} image={"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/27d6d436-b35e-43f1-9a33-e41485d9006a/omni-multi-court-big-kids-indoor-court-shoes-xbrQcw.png"}/>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Store;