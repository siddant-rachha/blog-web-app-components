import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloudUpload from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { EventName } from '../../utils/EventEmitter/constants';
import { EventEmitter } from '../../utils/EventEmitter/EventEmitter';

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

type Props = {
  name?: string;
  title?: string;
  desc?: string;
  imageFile?: File | null;
  handleFormSubmit: (formData: {
    imageFile: File | null;
    title: string;
    desc: string;
    name: string;
  }) => void;
};

export const BlogForm: React.FC<Props> = ({
  name = '',
  title = '',
  desc = '',
  imageFile = null,
  handleFormSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: name,
    title: title,
    desc: desc,
  });

  const [imageFileState, setImageFileState] = useState<File | null>(imageFile);
  const [previewImage, setPreviewImage] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      name,
      title,
      desc,
    }));
  }, [name, title, desc]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFileState(file);
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      } // Set preview image
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const completeData = {
      ...formData,
      imageFile: imageFileState,
    };

    handleFormSubmit(completeData);
    EventEmitter(EventName.handleFormSubmit, completeData);
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 4 },
        background: 'linear-gradient(145deg, #f6f8fc 0%, #f0f4f8 100%)',
        borderRadius: '16px',
        margin: 'auto',
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        variant="elevation"
        elevation={4}
        sx={{
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
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          multiline
          rows={12}
        />
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          alignItems={'flex-start'}
        >
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUpload />}
            sx={{ width: '50%' }}
          >
            <Typography variant="caption">Upload files</Typography>
            <VisuallyHiddenInput
              type="file"
              onChange={event => handleImageChange(event)}
              accept="image/*"
            />
          </Button>
          {imageFileState ? (
            <Box
              component="img"
              src={previewImage}
              alt="Uploaded Preview"
              sx={{
                width: 'auto',
                height: '100px',
                borderRadius: 2,
                mt: 2,
                boxShadow: 1,
              }}
            />
          ) : (
            <Typography fontStyle="italic" variant="caption">
              Optional
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Create Post
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
