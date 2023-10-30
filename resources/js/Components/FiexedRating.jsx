import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function FixedRating() {
  const [value, setValue] = React.useState(4);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        size='small'
        name="read-only"
        value={value}
        readOnly
      />
    </Box>
  );
}
