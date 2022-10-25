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

export const OpenInfo = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ width: '40%' }}>
      <Collapse in={open}>
        <Alert
          severity="info"
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
          {children}
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open to view and print the QR code
      </Button>
    </Box>
  );
};

export const DoneAlert = ({ primary, secondary }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
      role="alert"
    >
      <span className="font-extrabold">Info alert!</span> The customer would get
      a notification when you mark any task as done.
    </div>
  );
};
export const QrAlert = ({ primary, secondary }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
      role="alert"
    >
      <span className="font-extrabold">Info alert!</span> Click print icon to
      print.
    </div>
  );
};
