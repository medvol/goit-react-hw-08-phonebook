import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OutlinedInput, FormControl, Box } from '@mui/material';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl
        sx={{
          mt: 2,
          width: '40%',
        }}
        size="small"
        variant="outlined"
      >
        <OutlinedInput
          id="form-search"
          type="text"
          name="filter"
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value))}
          placeholder="Search contacts..."
          inputProps={{
            'aria-label': 'search',
          }}
          color="secondary"
          sx={{
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: '#a5a7ac',
            },
          }}
        />
      </FormControl>
    </Box>
  );
};
