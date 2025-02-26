import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DrawerComponent } from './components/DrawerComponent';
import { SearchComponent } from './components/SearchComponent';
import { AvatarMenu } from './components/AvatarMenu';
import { NavBarItems } from './components/NavBarItems';

const navItems = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type Props = {
  children: React.ReactNode | null;
};

export const HeaderNav: React.FC<Props> = ({ children }) => {
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
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* logo */}
          <Typography variant="h6" component="div">
            MUI
          </Typography>

          {/* search component */}
          <SearchComponent />

          {/* navbar with item links */}
          <NavBarItems
            navItems={navItems}
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          />

          {/* avatar with menu */}
          <AvatarMenu menuItems={settings} />
        </Toolbar>
      </AppBar>

      {/* drawer component */}
      <DrawerComponent
        navItems={navItems}
        drawerWidth={240}
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={handleDrawerToggle}
      />

      {/* main section */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
