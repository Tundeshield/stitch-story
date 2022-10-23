import { Alert, Box, Button, Collapse, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

export const SuccessAlert = ({ primary, secondary }) => {
  return (
    <div
      class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span class="font-medium">{primary}</span>
      {secondary}
    </div>
  );
};

export const ErrorAlert = ({ primary, secondary }) => {
  return (
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span class="font-medium">{primary}</span> {secondary}
    </div>
  );
};

export const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          To change your password —{' '}
          <Link to="/reset-password">
            <strong>Update now!</strong>{' '}
          </Link>
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open to change password
      </Button>
    </Box>
  );
};
