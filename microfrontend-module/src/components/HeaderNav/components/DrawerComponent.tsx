import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
        <Box onClick={onDrawerClose} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                      borderRadius: 0,
                      borderBottom:
                        navActive === item ? `1px solid #1976d2` : null,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};
