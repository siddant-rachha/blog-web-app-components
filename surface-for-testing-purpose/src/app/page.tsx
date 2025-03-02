/* eslint-disable @typescript-eslint/no-namespace */
'use client';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  BlogNavContainer,
  BlogList,
  BlogPage,
  BlogForm,
} from 'blog-web-app-components';
import { EventConsumer, RemoveEvent } from '../utils/EventConsumer';
import {
  avatarItems,
  blogPost,
  blogPosts,
  navItems,
  searchItems,
} from './mocks';

// define types for webcomponents in .d.ts file
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'blog-nav-container': {
          'logo-src'?: string;
          'avatar-src'?: string;
          'nav-items'?: string;
          'nav-active'?: string;
          'avatar-items'?: string;
          'search-items'?: string;
        };
        'blog-list': {
          'blog-posts': string;
          'blog-filter'?: string;
          'blog-per-page'?: string;
          'pagination-filter'?: string;
        };
        'blog-page': {
          'blog-post': string;
        };
        'blog-form': {
          name?: string;
          title?: string;
          desc?: string;
        };
      }
    }
  }
}

export default function Home() {
  // handlers for event listerners and callbacks
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
    // register custom events
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
      RemoveEvent('handleBlogActionWC', handleBlogAction);
      RemoveEvent('handleFilterSelectWC', handleFilterSelect);
      RemoveEvent('handleCardActionWC', handleCardAction);
    };
  }, []);

  return (
    <>
      <Box>
        <BlogNavContainer
          logoSrc="/default-logo.png"
          avatarSrc="https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          navItems={navItems}
          navActive={navItems[0]}
          avatarItems={avatarItems}
          searchItems={searchItems}
          handleNavItem={handleNavItem}
          handleAvatarItem={handleAvatarItem}
          handleSearchItem={handleSearchItem}
          handleSearchInput={handleSearchInput}
        >
          <h1>These are Module components</h1>

          <BlogList
            blogPosts={blogPosts}
            blogFilter={['Oldest', 'Newest', 'My Posts']}
            blogPerPage="6"
            paginationFilter={['6', '12', '24']}
            handleFilterSelect={handleFilterSelect}
            handleCardAction={handleCardAction}
          />

          <BlogPage blogPost={blogPost} handleBlogAction={handleBlogAction} />

          <BlogForm
            name="sid"
            title="i am title"
            desc="i am desc"
            handleFormSubmit={handleFormSubmit}
          />
        </BlogNavContainer>
      </Box>
      <Box p={4}>
        <h1>These are Web components</h1>

        {/* Only one nav container can be used */}
        {/* <blog-nav-container
          logo-src="/default-logo.png"
          avatar-src="https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          nav-items={JSON.stringify(navItems)}
          nav-active="Home"
          avatar-items={JSON.stringify(avatarItems)}
          search-items={JSON.stringify(searchItems)}
        /> */}

        <blog-list
          blog-posts={JSON.stringify(blogPosts)}
          blog-filter={JSON.stringify(['Oldest', 'Newest', 'My Posts'])}
          blog-per-page="6"
          pagination-filter={JSON.stringify(['6', '12', '24'])}
        />

        <blog-page blog-post={JSON.stringify(blogPost)} />

        <blog-form name="sid" title="i am title" desc="i am desc" />
      </Box>
    </>
  );
}
