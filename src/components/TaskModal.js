import React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0.2px solid rgb(209 213 219)',
  boxShadow: 24,
  p: 4,
  borderRadius: '0.5rem',
};

const TaskModal = ({ children, handleClose, open, title }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="p" component="h3">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {children}
        </Typography>
      </Box>
    </Modal>
  );
};

export default TaskModal;
