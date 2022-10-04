import React from 'react';
import Typography from '@mui/material/Typography';

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    Stitchstory by Tunde Adepegba {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
