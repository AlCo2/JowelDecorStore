import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
const AddProduct = () => {
    const [values, setValues] = useState({
        title: "",
        Q: '',
        price: '',
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
        values.Q = '';
        values.price = '';
        values.image = null;
      }
  return (
        <div className='flex justify-center'>
            <form className='p-2 rounded-md border-2 mb-2'>
              <div className='flex gap-2 my-2'> 
                <TextField onChange={handleChange} value={values.title} name='product Name' id="title" label="Product Name" variant="standard" />
                <TextField onChange={handleChange} className='w-20' value={values.Q} name='Q' id="Q" label="Q" variant="standard" />
                <TextField onChange={handleChange} className='w-20' value={values.price} name='price' id="price" label="price" variant="standard" />
              </div>
              <div className='grid place-content-center'>
                <input onChange={handleChange} className='border-2 rounded-md' type="file" name="image" id="image"/>
              </div>
              <div className='my-2 grid place-items-center'>
                <Button onClick={handleSubmit} variant="outlined">Submite</Button>
                
              </div>
            </form>
        </div>
  )
}

export default AddProduct;