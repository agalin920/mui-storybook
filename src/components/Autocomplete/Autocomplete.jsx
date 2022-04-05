import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';

import theme from '../../theme';

export const Autocomplete = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiAutocomplete
        data-testid="zds-autocomplete"
        {...props}
      />
    </ThemeProvider>
  );
};
