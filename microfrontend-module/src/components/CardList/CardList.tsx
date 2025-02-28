import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2 as Grid,
  Avatar,
  Button,
  styled,
  Pagination,
} from '@mui/material';
import { Filters } from './components/Filters';

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: 16,
}));

const ReadMoreButton = styled(Button)(() => ({
  marginTop: 'auto',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
}));

export const CardList: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Modern Web Development',
      author: 'Sarah Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      excerpt:
        'Exploring the latest trends and best practices in modern web development, from responsive design to progressive web apps.',
      tags: ['Web Development', 'Programming', 'Tech'],
    },
    {
      id: 2,
      title: 'Understanding UI/UX Design Principles',
      author: 'Michael Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      date: 'March 14, 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      excerpt:
        'A comprehensive guide to understanding the fundamental principles of user interface and user experience design.',
      tags: ['Design', 'UI/UX', 'Creative'],
    },
    {
      id: 3,
      title: 'The Future of Artificial Intelligence',
      author: 'Emily Rodriguez',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      date: 'March 13, 2024',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      excerpt:
        'Diving deep into the future implications of AI technology and its potential impact on various industries.',
      tags: ['AI', 'Technology', 'Future'],
    },
    {
      id: 4,
      title: 'The Art of Modern Web Development',
      author: 'Sarah Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      excerpt:
        'Exploring the latest trends and best practices in modern web development, from responsive design to progressive web apps.',
      tags: ['Web Development', 'Programming', 'Tech'],
    },
    {
      id: 5,
      title: 'Understanding UI/UX Design Principles',
      author: 'Michael Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      date: 'March 14, 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      excerpt:
        'A comprehensive guide to understanding the fundamental principles of user interface and user experience design.',
      tags: ['Design', 'UI/UX', 'Creative'],
    },
  ];

  return (
    <>
      <Filters />
      <Box
        sx={{
          p: 4,
          background: 'linear-gradient(145deg, #f6f8fc 0%, #f0f4f8 100%)',
          borderRadius: '16px',
        }}
      >
        <Grid container spacing={4}>
          {blogPosts.map(post => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={post.avatarUrl}
                      alt={post.author}
                      sx={{ width: 40, height: 40, mr: 1 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" color="text.primary">
                        {post.author}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" gutterBottom component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {post.excerpt}
                  </Typography>

                  <ReadMoreButton
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 2 }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </ReadMoreButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination count={10} color="primary" size="large" />
        </Box>
      </Box>
    </>
  );
};
