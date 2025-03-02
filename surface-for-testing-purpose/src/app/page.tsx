/* eslint-disable @typescript-eslint/no-namespace */
'use client';
// import { Box } from '@mui/material';
import {
  // BlogNavContainer,
  BlogList,
  // BlogPage,
  // BlogForm,
} from 'blog-web-app-components';
import { useEffect } from 'react';
import { EventConsumer, RemoveEvent } from '../utils/EventConsumer';
import { blogPosts } from './mocks';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'blog-nav-container': unknown;
        'blog-page': unknown;
        'blog-list': unknown;
        'blog-form': unknown;
      }
    }
  }
}

const navItems = ['Home', 'About', 'Contact'];
const avatarItems = ['Profile', 'Account', 'Dashboard', 'Logout'];
const searchItems = [
  'The Art of Modern Web Development',
  'The Art of Modern Web Development The Art of Modern Web Development The Art of Modern Web Development',
  'title3',
  'title4',
  'title5',
] as string[];

// const blogPost = {
//   writePermission: true,
//   title: 'Amazing Blog Post',
//   imageSrc:
//     'https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
//   desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   `,
//   date: 'February 28, 2025',
//   author: 'John Doe',
//   avatarSrc:
//     'https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// };

export default function Home() {
  const handleNavItem = (item: string) => {
    console.log(item);
  };
  const handleAvatarItem = (item: string) => {
    console.log(item);
  };
  const handleSearchItem = (item: string) => {
    console.log(item);
  };

  const handleSearchInput = (item: string) => {
    console.log(item);
  };

  const handleFormSubmit = (formData: {
    name: string;
    title: string;
    desc: string;
  }) => {
    console.log(formData);
  };

  const handleBlogAction = (action: string) => {
    console.log(action);
  };

  const handleCardAction = ({ id, action }: { id: string; action: string }) => {
    console.log(id, action);
  };

  const handleFilterSelect = ({
    type,
    item,
  }: {
    type: string;
    item: string;
  }) => {
    console.log(type, item);
  };

  useEffect(() => {
    EventConsumer('handleAvatarItemWC', handleAvatarItem);
    EventConsumer('handleNavItemWC', handleNavItem);
    EventConsumer('handleSearchItemWC', handleSearchItem);
    EventConsumer('handleSearchInputWC', handleSearchInput);
    EventConsumer('handleFormSubmitWC', handleFormSubmit);
    EventConsumer('handleBlogActionWC', handleBlogAction);
    EventConsumer('handleFilterSelectWC', handleFilterSelect);
    EventConsumer('handleCardActionWC', handleCardAction);
    return () => {
      RemoveEvent('handleAvatarItemWC', handleAvatarItem);
      RemoveEvent('handleNavItemWC', handleNavItem);
      RemoveEvent('handleSearchItemWC', handleSearchItem);
      RemoveEvent('handleSearchInputWC', handleSearchInput);
      RemoveEvent('handleFormSubmitWC', handleFormSubmit);
      EventConsumer('handleFilterSelectWC', handleFilterSelect);
      EventConsumer('handleCardActionWC', handleCardAction);
    };
  }, []);

  return (
    <div>
      <blog-nav-container
        logo-src="/default-logo.png"
        nav-items={JSON.stringify(navItems)}
        nav-active="Home"
        avatar-items={JSON.stringify(avatarItems)}
        search-items={JSON.stringify(searchItems)}
      />
      {/* <BlogForm
        name="sid"
        title="i am title"
        desc="i am desc"
        handleFormSubmit={handleFormSubmit}
      /> */}
      {/* <blog-form name="sid" title="i am title" desc="i am desc" /> */}
      {/* <blog-list /> */}
      {/* <blog-page /> */}
      {/* <BlogPage blogPost={blogPost} handleBlogAction={handleBlogAction} /> */}
      <BlogList
        blogPosts={blogPosts}
        blogFilter={['sid', 'rac']}
        blogPerPage="6"
        paginationFilter={['Six', 'Twelve', 'Twenty-Five']}
        handleFilterSelect={handleFilterSelect}
        handleCardAction={handleCardAction}
      />
    </div>
  );

  // return (
  //   <div>
  //     <BlogNavContainer
  //       imgSrc="/default-logo.png"
  //       navItems={navItems}
  //       navActive={navItems[0]}
  //       avatarItems={avatarItems}
  //       searchItems={searchItems}
  //       handleNavItem={handleNavItem}
  //       handleAvatarItem={handleAvatarItem}
  //       handleSearchItem={handleSearchItem}
  //       handleSearchInput={handleSearchInput}
  //     >
  //       <Box
  //         sx={{
  //           width: { sm: '90%', md: '70%', lg: '60%' },
  //           display: 'flex',
  //           justifyContent: 'center',
  //           margin: 'auto',
  //           flexDirection: 'column',
  //           mb: 2,
  //         }}
  //       >
  //         <BlogPage />
  //       </Box>

  //       <Box
  //         sx={{
  //           width: { lg: '60%' },
  //           display: 'flex',
  //           justifyContent: 'center',
  //           margin: 'auto',
  //           flexDirection: 'column',
  //           mb: 2,
  //         }}
  //       >
  //         <BlogForm />
  //       </Box>

  //       <Box
  //         sx={{
  //           width: { lg: '80%' },
  //           display: 'flex',
  //           justifyContent: 'center',
  //           margin: 'auto',
  //           flexDirection: 'column',
  //           mb: 2,
  //         }}
  //       >
  //         <BlogList />
  //       </Box>
  //     </BlogNavContainer>
  //   </div>
  // );
}
