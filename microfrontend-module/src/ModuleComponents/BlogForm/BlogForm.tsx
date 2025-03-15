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
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes

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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > MAX_FILE_SIZE) {
        alert('Image size should not exceed 1MB.');
        return;
      }

      setImageFileState(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFileState(null);
    setPreviewImage(undefined);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        background: '#f0f4f8',
        borderRadius: '16px',
        margin: 'auto',
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        variant="elevation"
        elevation={4}
        sx={{ p: 3 }}
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
          disabled
        />

        <TextField
          label="Title of Blog"
          name="title"
          value={formData.title}
          onChange={e =>
            e.target.value.length <= 50 &&
            handleChange(e as React.ChangeEvent<HTMLInputElement>)
          }
          helperText={`${formData.title.length}/50`}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Description of Blog"
          name="desc"
          value={formData.desc}
          onChange={e =>
            e.target.value.length <= 10000 &&
            handleChange(e as React.ChangeEvent<HTMLInputElement>)
          }
          helperText={`${formData.desc.length}/10000`}
          fullWidth
          margin="normal"
          required
          multiline
          rows={12}
        />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          mt={2}
        >
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUpload />}
          >
            <Typography variant="caption" fontSize={'0.6rem'}>
              Upload image (Max 1MB)
            </Typography>
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>

          {imageFileState ? (
            <Box display="flex" alignItems="center" mt={2}>
              <Box
                component="img"
                src={previewImage}
                alt="Preview"
                sx={{
                  width: 'auto',
                  height: '100px',
                  borderRadius: 2,
                  boxShadow: 1,
                  mr: 1,
                }}
              />
              <IconButton
                onClick={handleRemoveImage}
                color="error"
                sx={{ height: '40px', width: '40px' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
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
