import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiBox, { BoxProps } from '@mui/material/Box';

import theme from '../../theme';

export const Box = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiBox
        data-testid="zds-box"
        {...props}
      />
    </ThemeProvider>
  );
};