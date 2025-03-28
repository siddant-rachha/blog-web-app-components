import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditOutlined from '@mui/icons-material/EditOutlined';
import { DeleteModal } from './components/DeleteModal';
import { EventEmitter } from '../../utils/EventEmitter/EventEmitter';
import { EventName } from '../../utils/EventEmitter/constants';

type Props = {
  blogPost: {
    title: string;
    imageSrc: string;
    desc: string;
    date: string;
    author: string;
    avatarSrc: string;
    writePermission: boolean;
  };
  handleBlogAction: (action: 'edit' | 'del') => void;
};

export const BlogPage: React.FC<Props> = ({ blogPost, handleBlogAction }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletePostTitle, setDeletePostTitle] = useState('');

  const handleDeleteActionClick = () => {
    handleBlogAction('del');
    EventEmitter(EventName.handleBlogAction, 'del');
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 4 },
        background: 'linear-gradient(145deg, #f6f8fc 0%, #f0f4f8 100%)',
        borderRadius: '16px',
      }}
    >
      <DeleteModal
        open={deleteModalOpen}
        title={deletePostTitle}
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={() => {
          handleDeleteActionClick();
          setDeleteModalOpen(false);
        }}
      />
      <Paper elevation={2}>
        <Card sx={{ boxShadow: 3 }}>
          <CardMedia
            component="img"
            image={blogPost.imageSrc}
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
                  src={blogPost.avatarSrc}
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

              {blogPost.writePermission && (
                <Box
                  marginLeft="auto"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    onClick={() => {
                      handleBlogAction('edit');
                      EventEmitter(EventName.handleBlogAction, 'edit');
                    }}
                    size="small"
                    sx={{ minWidth: 0 }}
                  >
                    <EditOutlined /> Edit
                  </Button>
                  <Button
                    onClick={() => {
                      // handleBlogAction('del');
                      // EventEmitter(EventName.handleBlogAction, 'del');
                      setDeleteModalOpen(true);
                      setDeletePostTitle(blogPost.title);
                    }}
                    size="small"
                    sx={{ minWidth: 0 }}
                  >
                    <DeleteOutline color="error" /> Delete
                  </Button>
                </Box>
              )}
            </Box>

            <Typography
              variant="body1"
              sx={{ mb: 3, mt: 3, whiteSpace: 'pre-wrap' }}
            >
              {blogPost.desc}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};
