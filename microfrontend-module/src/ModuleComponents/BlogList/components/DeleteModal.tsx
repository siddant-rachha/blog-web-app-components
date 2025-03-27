import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

export const DeleteModal = ({
  open,
  title,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography id="simple-modal-title" variant="h6" component="div">
          Are you sure you want to delete?
          {title && <Typography variant="subtitle1">Title: {title}</Typography>}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 2,
          }}
        >
          <Button
            sx={{ mr: 2 }}
            onClick={onCancel}
            variant="contained"
            color="primary"
          >
            No
          </Button>
          <Button onClick={onConfirm} variant="contained" color="warning">
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
