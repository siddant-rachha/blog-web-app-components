import React, { useEffect, useRef, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  flexGrow: 1,
  maxWidth: '50%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  width: '100%',
}));

export const SearchComponent = () => {
  const [isListOpen, setListOpen] = useState(true);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0 });

  const handleClickOutside = (event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      const xPosition = boxRef.current.getBoundingClientRect().x;
      setBoxPosition({ x: -xPosition });
    }
  }, []);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <Box
        ref={boxRef}
        sx={{
          position: 'absolute',
          width: '100vw',
          maxWidth: '1280px',
          mt: { xs: 1, sm: 2 },
          left: boxPosition.x,
          display: isListOpen ? 'block' : 'none',
        }}
      >
        <List
          sx={{
            width: '100%',
            bgcolor: 'rgba(220, 220, 220, 0.8)',
          }}
        >
          {[1, 2, 3].map(value => (
            <ListItem key={value}>
              <ListItemText
                primary={`Line item ${value}`}
                sx={{ color: 'black', cursor: 'pointer' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Search>
  );
};
