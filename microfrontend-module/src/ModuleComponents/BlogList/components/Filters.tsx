import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { EventEmitter } from '../../../utils/EventEmitter/EventEmitter';
import { EventName } from '../../../utils/EventEmitter/constants';

export const Filters = ({
  blogFilter = [],
  handleBlogFilter,
}: {
  blogFilter: string[];
  handleBlogFilter: (filter: string) => void;
}) => {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
    handleBlogFilter(event.target.value);
    EventEmitter(EventName.handleBlogFilter, event.target.value);
  };

  return (
    <Box
      sx={{
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <FormControl
        fullWidth
        sx={{ maxWidth: 240, marginRight: 2, minWidth: 80 }}
        size="small"
      >
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          {blogFilter.map(item => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
