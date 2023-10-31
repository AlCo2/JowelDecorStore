import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';


const AddCategory = () => {
    const [value, setValue] = useState({name:''});
    function handleChange(e) {
        setValue({name:e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        router.post('/api/addcategory', value);
        setValue({name:''});
    }
  return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='p-2 rounded-md border-2 mb-2'>
              <div className='flex gap-2 my-2'>
                <input id='name' placeholder='Category' onChange={handleChange} value={value.name} type="text" name="name" className='w-52 h-8 rounded-md' />
              </div>
              <div className='my-2 grid place-items-center'>
                <button className='bg-black text-white w-20 h-10 rounded-md'>Submite</button>
              </div>
            </form>
        </div>
  )
}

export default AddCategory;