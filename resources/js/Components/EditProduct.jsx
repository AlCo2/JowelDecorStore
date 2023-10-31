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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function EditProduct({row}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (choice) => {
    if(choice){
        console.log("saved");
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
            <p>this is a trial for editing product</p>
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
