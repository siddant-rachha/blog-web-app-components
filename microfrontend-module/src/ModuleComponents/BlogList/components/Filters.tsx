import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { EventEmitter } from '../../../utils/EventEmitter/EventEmitter';
import { EventName } from '../../../utils/EventEmitter/constants';

export const Filters = ({
  type,
  filter = [],
  handleFilter,
  width,
}: {
  type: 'Filter by' | 'Per page';
  filter: string[];
  handleFilter: ({ type, item }: { type: string; item: string }) => void;
  width: number;
}) => {
  const [filterItem, setFilterItem] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilterItem(event.target.value as string);
    const filterItem = { type, item: event.target.value };
    handleFilter(filterItem);
    EventEmitter(EventName.handleFilterSelect, filterItem);
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
        sx={{ maxWidth: 240, marginRight: 2, width }}
        size="small"
      >
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterItem}
          label={type}
          onChange={handleChange}
        >
          {filter.map(item => {
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
