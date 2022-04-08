import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiCircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

import theme from '../../theme';

export const CircularProgress = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiCircularProgress
        data-testid="zds-circular-progress"
        {...props}
      />
    </ThemeProvider>
  );
};
