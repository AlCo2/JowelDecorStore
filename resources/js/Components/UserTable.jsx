import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'email', headerName: 'email',width: 200 },
  {
    field: 'admin',
    headerName: 'Admin',
    width: 90,
  },
];

const rows = [
  { id: 1, title: 'something', Q: 22, price: 350 },  
];

export default function UserTable() {
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
