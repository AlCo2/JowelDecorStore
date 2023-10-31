import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Confirm_delete_category from './Confirm_delete_category';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  {
    field: "action",
    headerName: "",
    sortable: false,
    renderCell: ({ row })=>
      <Confirm_delete_category row={row}/>
  },
];

export default function CategoryTable({data}) {
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
