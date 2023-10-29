import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { BiPaint, BiPencil, BiPin, BiTrash } from 'react-icons/bi';
import AlertDialog from './AlertDialog';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'title', width: 130 },
  { field: 'Q', headerName: 'Q', type:'number',width: 130 },
  {
    field: 'price',
    headerName: 'price',
    type: 'number',
    width: 90,
  },
  {
    field: "edit",
    headerName: "",
    sortable: false,
    renderCell: ({ row })=>
      <Button onClick={()=>{console.log("Hello World")}} variant="outlined"><BiPencil/></Button>
  },
  {
    field: "action",
    headerName: "",
    sortable: false,
    renderCell: ({ row })=>
      <AlertDialog row={row}/>          
  },
];

export default function ProductTable({data}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
}
