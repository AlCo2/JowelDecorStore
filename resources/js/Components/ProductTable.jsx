import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
];

const rows = [
  { id: 1, title: 'something', Q: 22, price: 350 },
  { id: 2, title: 'product', Q: 30, price: 320 },
  { id: 3, title: 'nothing', Q: 12, price: 452 },
  { id: 4, title: 'kasrona', Q: 13, price: 130 },
  { id: 5, title: 'madrid', Q: 13, price: 130 },
  { id: 6, title: 'madrid', Q: 13, price: 130 },
  { id: 7, title: 'madrid', Q: 13, price: 130 },
  
];

export default function ProductTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
