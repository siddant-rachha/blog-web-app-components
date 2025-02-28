import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

type Props = {
  navItems: string[];
  navActive: string;
  drawerWidth: number;
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
  imgSrc: string;
  handleNavItem: (item: string) => void;
};

export const DrawerComponent: React.FC<Props> = ({
  navItems,
  navActive,
  drawerWidth,
  isDrawerOpen,
  onDrawerClose,
  imgSrc,
  handleNavItem,
}) => {
  const handleNavItemClick = (item: string) => {
    handleNavItem(item);
  };
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Paper
          sx={{ margin: 1, textAlign: 'center' }}
          variant="elevation"
          elevation={2}
          onClick={onDrawerClose}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1,
              mt: 1,
            }}
          >
            <img src={imgSrc} alt="Logo" height={50} />
          </Box>
          <Divider />
          <List>
            {navItems.map(item => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={item}
                    onClick={() => handleNavItemClick(item)}
                    sx={{
                      padding: '4px',
                      borderRadius: 0,
                      borderBottom:
                        navActive === item ? `2px solid gray` : null,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Drawer>
    </nav>
  );
};
