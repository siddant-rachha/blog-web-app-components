import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';

import { Filters } from './components/Filters';
import { EventEmitter } from '../../utils/EventEmitter/EventEmitter';
import { EventName } from '../../utils/EventEmitter/constants';
import { DeleteModal } from './components/DeleteModal';
import { CustomCard } from './components/CustomCard';

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  avatarSrc: string;
  imgSrc: string;
  date: string;
  desc: string;
  writePermission: boolean;
  showFavorite: boolean;
  isFavorite: boolean;
};

type Props = {
  blogPosts: BlogPost[];
  blogFilter: string[];
  paginationFilter: string[];
  blogPerPage: string;
  handleFilterSelect: ({ type, item }: { type: string; item: string }) => void;
  handleCardAction: ({
    id,
    action,
  }: {
    id: string;
    action: 'edit' | 'del' | 'read' | 'fav';
  }) => void;
};

export const BlogList: React.FC<Props> = ({
  blogPosts = [],
  blogFilter = [],
  paginationFilter = [],
  blogPerPage = '6',
  handleFilterSelect,
  handleCardAction,
}) => {
  const [perPageItems, setPerPageItems] = useState([] as BlogPost[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletePostId, setDeletePostId] = useState('');
  const [deletePostTitle, setDeletePostTitle] = useState('');

  const handleCardActionClick = (
    id: string,
    action: 'edit' | 'del' | 'read' | 'fav'
  ) => {
    handleCardAction({
      id,
      action,
    });
    EventEmitter(EventName.handleCardAction, {
      id,
      action,
    });
    if (action === 'del') {
      setDeleteModalOpen(true);
      setDeletePostId(id);
      setDeletePostTitle(blogPosts.find(post => post.id === id)?.title || '');
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);

    const startIndex = (page - 1) * Number(blogPerPage);
    const endIndex = startIndex + Number(blogPerPage);

    setPerPageItems(blogPosts.slice(startIndex, endIndex));

    // Scroll to the top when pagination changes
    window.scrollTo({
      top: document.getElementById('top-section')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const totalPages = Math.ceil(blogPosts.length / Number(blogPerPage));
    setPaginationCount(totalPages);

    // Reset to first page when blogPosts change
    setCurrentPage(1);
    const startIndex = 0;
    const endIndex = Number(blogPerPage);
    setPerPageItems(blogPosts.slice(startIndex, endIndex));
  }, [blogPosts, blogPerPage]);

  if (!blogPosts.length) {
    return null;
  }

  return (
    <Box id="top-section" display={'flex'} flexDirection={'column'}>
      <DeleteModal
        open={deleteModalOpen}
        title={deletePostTitle}
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={() => {
          handleCardActionClick(deletePostId, 'del');
          setDeleteModalOpen(false);
        }}
      />
      <Box
        sx={{
          p: { xs: 2, sm: 2, md: 4 },
          background: 'linear-gradient(145deg, #f6f8fc 0%, #f0f4f8 100%)',
          borderRadius: '16px',
        }}
      >
        <Filters
          width={240}
          filter={blogFilter}
          handleFilter={handleFilterSelect}
          type="Filter by"
          defaultValue={blogFilter[0]}
        />

        <Grid container spacing={4}>
          {perPageItems.map(post => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <CustomCard
                post={post}
                handleCardActionClick={handleCardActionClick}
              />
            </Grid>
          ))}
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
          <Pagination
            count={paginationCount}
            color="primary"
            size="large"
            sx={{ mb: 2 }}
            onChange={(e, page) => handlePagination(page)}
            page={currentPage}
          />
          <Filters
            width={120}
            filter={paginationFilter}
            handleFilter={handleFilterSelect}
            type="Per page"
            defaultValue={blogPerPage}
          />
        </Box>
      </Box>
    </Box>
  );
};
