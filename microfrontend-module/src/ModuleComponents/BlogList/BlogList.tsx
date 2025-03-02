import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Pagination from '@mui/material/Pagination';

import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditOutlined from '@mui/icons-material/EditOutlined';

import { Filters } from './components/Filters';
import { EventEmitter } from '../../utils/EventEmitter/EventEmitter';
import { EventName } from '../../utils/EventEmitter/constants';

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
type Props = {
  blogPosts: {
    id: string;
    title: string;
    author: string;
    avatarSrc: string;
    imgSrc: string;
    date: string;
    desc: string;
    writePermission: boolean;
  }[];
  blogFilter: string[];
  handleBlogFilter: (filter: string) => void;
  handleCardAction: ({
    id,
    action,
  }: {
    id: string;
    action: 'edit' | 'del' | 'read';
  }) => void;
};
export const BlogList: React.FC<Props> = ({
  blogPosts = [],
  blogFilter = [],
  handleBlogFilter,
  handleCardAction,
}) => {
  const handleCardActionClick = (
    id: string,
    action: 'edit' | 'del' | 'read'
  ) => {
    handleCardAction({
      id,
      action,
    });
    EventEmitter(EventName.handleCardAction, {
      id,
      action,
    });
  };
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box
        sx={{
          p: { xs: 2, sm: 2, md: 4 },
          background: 'linear-gradient(145deg, #f6f8fc 0%, #f0f4f8 100%)',
          borderRadius: '16px',
        }}
      >
        <Filters blogFilter={blogFilter} handleBlogFilter={handleBlogFilter} />

        <Grid container spacing={4}>
          {!blogPosts.length ? (
            <h4>No Blog Posts</h4>
          ) : (
            blogPosts.map(post => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.imgSrc}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={post.avatarSrc}
                        alt={post.author}
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
                            {post.author}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {post.date}
                          </Typography>
                        </Box>
                        {post.writePermission && (
                          <Box
                            marginLeft="auto"
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                            }}
                          >
                            <Button
                              sx={{ minWidth: 0 }}
                              onClick={() =>
                                handleCardActionClick(post.id, 'edit')
                              }
                            >
                              <EditOutlined />
                            </Button>
                            <Button
                              sx={{ minWidth: 0 }}
                              onClick={() =>
                                handleCardActionClick(post.id, 'del')
                              }
                            >
                              <DeleteOutline color="error" />
                            </Button>
                          </Box>
                        )}
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
                      {post.desc}
                    </Typography>

                    <ReadMoreButton
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 2 }}
                      aria-label={`Read more about ${post.title}`}
                      onClick={() => handleCardActionClick(post.id, 'read')}
                    >
                      Read More
                    </ReadMoreButton>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))
          )}
        </Grid>
        <Box
          mt={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Pagination count={10} color="primary" size="large" sx={{ mb: 2 }} />
          {/* <Filters /> */}
        </Box>
      </Box>
    </Box>
  );
};
