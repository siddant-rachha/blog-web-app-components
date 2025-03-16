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
import { Typography } from '@mui/material';

type Props = {
  children: React.ReactNode | null;
  logoSrc: string;
  avatarSrc: string;
  navItems: string[];
  navActive: string;
  avatarItems: string[];
  searchItems: { id: string; title: string }[];
  avatarName: string;
  searchItemLoading: boolean;
  handleNavItem: (item: string) => void;
  handleAvatarItem: (item: string) => void;
  handleSearchItem: (item: { id: string; title: string }) => void;
  handleSearchInput: (item: string) => void;
};

export const BlogNavContainer: React.FC<Props> = ({
  children,
  logoSrc = '.',
  avatarSrc = '.',
  navItems = [],
  navActive,
  avatarItems = [],
  searchItems = [],
  avatarName,
  searchItemLoading = false,
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
            sx={{ mr: 0 }}
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
            <img src={logoSrc} alt="Logo" height={40} />
          </Box>

          {/* search component */}
          <SearchComponent
            handleSearchItem={handleSearchItem}
            searchItems={searchItems}
            handleSearch={handleSearchInput}
            loading={searchItemLoading}
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
            avatarSrc={avatarSrc}
            handleAvatarItem={handleAvatarItem}
            avatarName={avatarName}
          />
        </Toolbar>
        <Typography
          variant={'subtitle2'}
          fontSize={'0.5rem'}
          position={'absolute'}
          right={'0'}
          bottom={'0'}
          mr={2}
          color="textDisabled"
        >
          @{avatarName}
        </Typography>
      </AppBar>

      {/* drawer component for mobile */}
      <DrawerComponent
        imgSrc={logoSrc}
        navItems={navItems}
        navActive={navActive}
        drawerWidth={240}
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={handleDrawerToggle}
        handleNavItem={handleNavItem}
      />

      {/* main section */}
      <Box
        component="main"
        width="100%"
        sx={{ padding: { xs: 1, sm: 2, md: 3 } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
