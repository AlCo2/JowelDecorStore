import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
const AddProduct = () => {
    const [values, setValues] = useState({
        title: "",
        Q: 0,
        price: 0,
      })
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
      function handleSubmit(e) {
        e.preventDefault();
        router.post('/api/addproduct', values);
      }
  return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='py-2'>
              <div className='flex gap-2 my-2'>
                <input id='title' placeholder='Product Name' onChange={handleChange} value={values.title} type="text" name="product Name" className='w-52 h-8 rounded-sm' />
                <input onChange={handleChange} value={values.Q} type="number" name="Q" id="Q"  className='w-20 h-8 rounded-sm'/>
                <input onChange={handleChange} value={values.price} type="number" name="price" id="price" className='w-20 h-8 rounded-sm'/>
              </div>
              <div className='grid place-content-center'>
                <input className='border-2' type="file" name="" id="" accept='png'/>
              </div>
              <div className='my-2 grid place-items-center'>
                <button className='bg-black text-white w-20 h-10 rounded-sm'>Submite</button>
              </div>
            </form>
        </div>
  )
}

export default AddProduct