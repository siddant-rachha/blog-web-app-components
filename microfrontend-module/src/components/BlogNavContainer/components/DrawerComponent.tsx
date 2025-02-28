import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
            background: '#f4f6f8',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Paper
          sx={{
            m: 2,
            p: 2,
            textAlign: 'center',
            boxShadow: 'none',
            background: 'transparent',
          }}
          onClick={onDrawerClose}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              mt: 2,
            }}
          >
            <img
              src={imgSrc}
              alt="Logo"
              height={50}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navItems.map(item => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => handleNavItemClick(item)}
                  sx={{
                    textAlign: 'center',
                    borderRadius: 2,
                    mb: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    },
                    backgroundColor:
                      navActive === item
                        ? 'rgba(25, 118, 210, 0.1)'
                        : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            navActive === item
                              ? 'primary.main'
                              : 'text.primary',
                          fontWeight: navActive === item ? 'bold' : 'normal',
                        }}
                      >
                        {item}
                      </Typography>
                    }
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
