import React from 'react';
import { Pagination, Stack } from '@mui/material';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
};

export default PaginationComponent;
