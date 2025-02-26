import React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props extends BoxProps {
  navItems: string[];
}

export const NavBarItems: React.FC<Props> = ({ navItems, ...rest }) => {
  return (
    <Box {...rest}>
      {navItems.map(item => (
        <Button key={item} sx={{ color: '#fff' }}>
          {item}
        </Button>
      ))}
    </Box>
  );
};
