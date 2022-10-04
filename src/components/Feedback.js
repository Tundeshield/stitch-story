import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorAlert = ({ children }) => {
  return <Alert severity="error">{children}</Alert>;
};

const SuccessAlert = ({ children }) => {
  return <Alert severity="success">{children}</Alert>;
};

const InfoAlert = ({ children }) => {
  return <Alert severity="info">{children}</Alert>;
};

export { SuccessAlert, ErrorAlert, InfoAlert };
