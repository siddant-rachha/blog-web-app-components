import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  styled,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const BlogForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const completeData = {
      ...formData,
      image,
    };
    console.log('Form Data:', completeData);
    // Handle form submission logic here (e.g., send data to backend)

    // Reset form fields after submission
    setFormData({
      name: '',
      title: '',
      description: '',
    });
    setImage(null);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      variant="elevation"
      elevation={4}
      sx={{
        margin: 'auto',
        p: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Blog Post
      </Typography>

      <TextField
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Title of Blog"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Description of Blog"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        multiline
        rows={12}
      />
      <Box display="flex" width="100%" flexDirection="column">
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
          startIcon={<CloudUpload />}
          sx={{ width: '50%' }}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={event => handleImageChange(event)}
            multiple
          />
        </Button>
        {image ? (
          <Typography sx={{ mt: 1 }}>Selected Image: {image.name}</Typography>
        ) : (
          <Typography fontStyle="italic" variant="caption">
            Optional
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Create Post
        </Button>
      </Box>
    </Paper>
  );
};
