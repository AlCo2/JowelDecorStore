import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AiOutlineClose } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import TransfereList from './TransfereList';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function EditProduct({row, data}) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    id: row.id,
    title: row.title,
    Q: row.Q,
    price: row.price,
    image:null,
  })
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  function handleChange(e) {
    const { id, value, type } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [id]: type === 'file' ? e.target.files[0] : value, // If it's a file input, get the file, otherwise get the value
    }));
  }
  const handleClickOpen = async () => {
    try {
      const response = await axios.get('/api/get_category/' + row.id);
      const categoryData = response.data;
      setCategory(categoryData);
  
      const result = data.filter(item => !categoryData.some(catItem => catItem.id === item.id));
      setCategories(result);
  
      setOpen(true);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };
  const handleClose = async (choice) => {
    if(choice){
      values.Q = parseInt(values.Q);
      values.price = parseInt(values.price);
      
      if(Number.isNaN(values.Q) || Number.isNaN(values.price))
        return;
      if(values.Q<=0 || values.price<=0)
        return;

      const data = {
        id:row.id,
        data:category
      }
      console.log(category);
      router.post('/api/updateproduct', values);
      router.post('/api/set_category', data);
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <BsPencil/>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit Product
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>handleClose(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <AiOutlineClose/>
        </IconButton>
        <DialogContent dividers>
            <div className='flex flex-col gap-2 my-2'>
              <TextField onChange={handleChange} id='title' value={values.title} name='title' label="Product Name" variant="standard" />
              <TextField onChange={handleChange} id='price' value={values.price} name='price' label="Price" variant="standard" />
              <TextField onChange={handleChange} id='Q' value={values.Q} name='Q' label="Q" variant="standard" />
              <input onChange={handleChange} className='border-2 rounded-md' type="file" name="image" id="image"/>
            </div>
            <TransfereList categories={categories} set_product_categories={setCategory} product_categories={category}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>handleClose(true)}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
