import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
const AddProduct = () => {
    const [values, setValues] = useState({
        title: "",
        Q: 0,
        price: 0,
        image:null,
      })
      function handleChange(e) {
        const { id, value, type } = e.target;
        setValues(prevValues => ({
          ...prevValues,
          [id]: type === 'file' ? e.target.files[0] : value, // If it's a file input, get the file, otherwise get the value
        }));
      }
      function handleSubmit(e) {
        e.preventDefault();
        values.Q = parseInt(values.Q);
        values.price = parseInt(values.price);
        
        if(Number.isNaN(values.Q) || Number.isNaN(values.price))
          return;
        if(values.Q<=0 || values.price<=0)
          return;
        router.post('/api/addproduct', values);
        values.title = '';
        values.Q = 0;
        values.price = 0;
        values.image = null;
      }
  return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='p-2 rounded-md border-2 mb-2'>
              <div className='flex gap-2 my-2'>
                <input id='title' placeholder='Product Name' onChange={handleChange} value={values.title} type="text" name="product Name" className='w-52 h-8 rounded-md' />
                <input onChange={handleChange} placeholder='Q' value={values.Q} type="text" name="Q" id="Q"  className='w-20 h-8 rounded-md'/>
                <input onChange={handleChange} placeholder='price' value={values.price} type="text" name="price" id="price" className='w-20 h-8 rounded-md'/>
              </div>
              <div className='grid place-content-center'>
                <input onChange={handleChange} className='border-2 rounded-md' type="file" name="image" id="image"/>
              </div>
              <div className='my-2 grid place-items-center'>
                <button className='bg-black text-white w-20 h-10 rounded-md'>Submite</button>
              </div>
            </form>
        </div>
  )
}

export default AddProduct;