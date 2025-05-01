import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@mui/material';
import { BlogPost } from '../BlogList';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { CustomFavorite } from './CustomFavorite';

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
  position: 'relative',
}));

const ReadMoreButton = styled(Button)(() => ({
  marginTop: 'auto',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
}));

interface Props {
  post: BlogPost;
  handleCardActionClick: (
    id: string,
    action: 'edit' | 'del' | 'read' | 'fav'
  ) => void;
}

export const CustomCard: React.FC<Props> = ({
  post,
  handleCardActionClick,
}) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={post.imgSrc}
        alt={post.title}
        sx={{ objectFit: 'cover' }}
      />
      <CustomFavorite
        fill={post.isFavorite}
        show={post.showFavorite}
        handleClick={() => {
          handleCardActionClick(post.id, 'fav');
        }}
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
                  onClick={() => handleCardActionClick(post.id, 'edit')}
                >
                  <EditOutlined />
                </Button>
                <Button
                  sx={{ minWidth: 0 }}
                  onClick={() => {
                    handleCardActionClick(post.id, 'del');
                  }}
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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {post.desc.slice(0, 150) + '...'}
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
  );
};
