import React, { useEffect, useRef, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { EventEmitter } from '../../../utils/EventEmitter/EventEmitter';
import { EventName } from '../../../utils/EventEmitter/constants';
import { CircularProgress } from '@mui/material';

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
  maxWidth: '60%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
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
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  width: '100%',
}));

type Props = {
  handleSearchItem: (item: { id: string; title: string }) => void;
  searchItems: { id: string; title: string }[] | [];
  loading: boolean;
  handleSearch: (item: string) => void;
};

export const SearchComponent: React.FC<Props> = ({
  handleSearchItem,
  searchItems = [],
  loading,
  handleSearch,
}) => {
  const [isListOpen, setListOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0 });
  const [searchString, setSearchString] = useState('');

  const handleClickOutside = (event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setListOpen(false);
    }
  };

  const handleSearchItemClick = (item: { id: string; title: string }) => {
    handleSearchItem(item);
    setListOpen(false);
    EventEmitter(EventName.handleSearchItem, item);
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
  }, [isListOpen]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search min 3 chars…"
        inputProps={{ 'aria-label': 'search', maxLength: 50 }}
        onClick={() => {
          setListOpen(true);
        }}
        onChange={e => {
          setSearchString(e.target.value);
          handleSearch(e.target.value);
          EventEmitter(EventName.handleSearchInput, e.target.value);
        }}
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
        <Paper
          variant="elevation"
          elevation={12}
          sx={{
            width: '100%',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            maxHeight: '30vh',
            overflow: 'scroll',
          }}
        >
          {searchItems.map((value, i) => (
            <ListItem key={i} sx={{ borderBottom: '0.5px solid gray' }}>
              <ListItemText
                primary={value.title}
                sx={{
                  color: 'blue',
                  cursor: 'pointer',
                  marginLeft: '16px',
                }}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClick={e => handleSearchItemClick({ ...value })}
              />
            </ListItem>
          ))}
          {!searchItems.length && searchString.length >= 3 && !loading && (
            <ListItem sx={{ borderBottom: '0.5px solid gray' }}>
              <ListItemText
                primary={'No results'}
                sx={{
                  color: 'black',
                  cursor: 'pointer',
                  marginLeft: '16px',
                }}
              />
            </ListItem>
          )}
          {loading && (
            <CircularProgress style={{ marginLeft: '45%' }} size={'1.5rem'} />
          )}
        </Paper>
      </Box>
    </Search>
  );
};
