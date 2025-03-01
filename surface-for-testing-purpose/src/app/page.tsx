/* eslint-disable @typescript-eslint/no-namespace */
'use client';
// import { Box } from '@mui/material';
// import {
//   BlogNavContainer,
//   BlogList,
//   BlogPage,
//   BlogForm,
// } from 'blog-web-app-components';
import { useEffect } from 'react';
import { EventConsumer, RemoveEvent } from './EventConsumer';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'blog-nav-container': { 'img-src': string };
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

  useEffect(() => {
    EventConsumer('handleAvatarItemWC', handleAvatarItem);
    EventConsumer('handleNavItemWC', handleNavItem);
    EventConsumer('handleSearchItemWC', handleSearchItem);
    EventConsumer('handleSearchInputWC', handleSearchInput);
    return () => {
      RemoveEvent('handleAvatarItemWC', handleAvatarItem);
      RemoveEvent('handleNavItemWC', handleNavItem);
      RemoveEvent('handleSearchItemWC', handleSearchItem);
      RemoveEvent('handleSearchInputWC', handleSearchInput);
    };
  }, []);

  return (
    <div>
      <blog-nav-container
        img-src="/default-logo.png"
        nav-items={JSON.stringify(navItems)}
        nav-active="Home"
        avatar-items={JSON.stringify(avatarItems)}
        search-items={JSON.stringify(searchItems)}
      ></blog-nav-container>
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
