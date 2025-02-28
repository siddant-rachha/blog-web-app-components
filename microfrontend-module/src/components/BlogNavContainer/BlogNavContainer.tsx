import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { DrawerComponent } from './components/DrawerComponent';
import { SearchComponent } from './components/SearchComponent';
import { AvatarMenu } from './components/AvatarMenu';
import { NavBarItems } from './components/NavBarItems';

type Props = {
  children: React.ReactNode | null;
  imgSrc: string;
  navItems: string[];
  navActive: string;
  avatarItems: string[];
  searchItems: string[];
  handleNavItem: (item: string) => void;
  handleAvatarItem: (item: string) => void;
  handleSearchItem: (item: string) => void;
  handleSearchInput: (item: string) => void;
};

export const BlogNavContainer: React.FC<Props> = ({
  children,
  imgSrc = '.',
  navItems = [],
  navActive,
  avatarItems = [],
  searchItems = [],
  handleNavItem,
  handleAvatarItem,
  handleSearchItem,
  handleSearchInput,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {/* menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={imgSrc} alt="Logo" height={60} />
          </Box>

          {/* search component */}
          <SearchComponent
            handleSearchItem={handleSearchItem}
            searchItems={searchItems}
            handleSearch={handleSearchInput}
          />

          {/* navbar with item links */}
          <NavBarItems
            handleNavItem={handleNavItem}
            navItems={navItems}
            navActive={navActive}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          />

          {/* avatar with menu */}
          <AvatarMenu
            menuItems={avatarItems}
            handleAvatarItem={handleAvatarItem}
          />
        </Toolbar>
      </AppBar>

      {/* drawer component for mobile */}
      <DrawerComponent
        imgSrc={imgSrc}
        navItems={navItems}
        navActive={navActive}
        drawerWidth={240}
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={handleDrawerToggle}
        handleNavItem={handleNavItem}
      />

      {/* main section */}
      <Box component="main" width="100%" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
