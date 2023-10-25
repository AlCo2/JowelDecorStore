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
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                {/* <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div> */}
                <div className=''>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                        <input id='title' onChange={handleChange} value={values.title} type="text" name="product Name" className='w-52 h-8' />
                        <input onChange={handleChange} value={values.Q} type="number" name="Q" id="Q"  className='w-20 h-8'/>
                        <input onChange={handleChange} value={values.price} type="number" name="price" id="price" className='w-20 h-8'/>
                        <button className='bg-black text-white w-20'>Submite</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct