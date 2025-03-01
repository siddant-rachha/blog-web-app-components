import React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import { EventEmitter } from '../../../webcomponents/EventEmitter/EventEmitter';
import { EventName } from '../../../webcomponents/EventEmitter/constants';

interface Props extends BoxProps {
  navItems: string[];
  navActive: string;
  handleNavItem: (item: string) => void;
}

export const NavBarItems: React.FC<Props> = ({
  navItems,
  handleNavItem,
  navActive,
  ...rest
}) => {
  const handleNavItemClick = (item: string) => {
    handleNavItem(item);
    EventEmitter(EventName.handleNavItem, item);
  };

  return (
    <Box {...rest}>
      {navItems.map(item => (
        <Button
          key={item}
          sx={{
            margin: { md: '0 8px 0' },
            color: '#fff',
            borderRadius: 0,
            borderBottom: navActive === item ? '2px solid #fff' : null,
          }}
          onClick={() => handleNavItemClick(item)}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};
