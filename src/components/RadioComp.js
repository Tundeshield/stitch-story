import { Label } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import React from 'react';

const RadioComp = ({ checked }) => {
  return (
    <>
      <Checkbox
        checked={checked}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
    </>
  );
};

export default RadioComp;
