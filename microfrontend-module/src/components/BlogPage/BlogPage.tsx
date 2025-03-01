import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Paper,
  Avatar,
} from '@mui/material';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';

export const BlogPage: React.FC = () => {
  // Dummy Data for Blog Post
  const blogPost = {
    title: 'Amazing Blog Post',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  `,
    date: 'February 28, 2025',
    author: 'John Doe',
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const handleEdit = () => {
    console.log('Edit post');
    // Add edit logic here (e.g., navigate to edit form)
  };

  const handleDelete = () => {
    console.log('Delete post');
    // Add delete logic here (e.g., call backend to delete post)
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 4 },
        background: 'linear-gradient(145deg, #f6f8fc 0%, #f0f4f8 100%)',
        borderRadius: '16px',
      }}
    >
      <Paper elevation={2}>
        <Card sx={{ boxShadow: 3 }}>
          <CardMedia
            component="img"
            image={blogPost.imageUrl}
            alt={blogPost.title}
            sx={{
              height: { sm: '50vh', xs: '30vh' },
              objectFit: 'cover',
            }}
          />

          <CardContent>
            <Typography variant="h4" gutterBottom>
              {blogPost.title}
            </Typography>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Avatar
                  src={blogPost.avatarUrl}
                  alt={blogPost.author}
                  sx={{ width: 40, height: 40, mr: 1 }}
                />
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="text.primary">
                      {blogPost.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {blogPost.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                marginLeft="auto"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Button onClick={handleEdit} size="small" sx={{ minWidth: 0 }}>
                  <EditOutlined /> Edit
                </Button>
                <Button
                  onClick={handleDelete}
                  size="small"
                  sx={{ minWidth: 0 }}
                >
                  <DeleteOutline color="error" /> Delete
                </Button>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ mb: 3, mt: 3 }}>
              {blogPost.description}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};
