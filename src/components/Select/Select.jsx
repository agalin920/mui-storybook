import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiSelect, { SelectProps } from '@mui/material/Select';

import theme from '../../theme';

export const Select = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiSelect
        data-testid="zds-select"

        {...props}
      />
    </ThemeProvider>
  );
};
