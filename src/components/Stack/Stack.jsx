import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiStack, { StackProps } from '@mui/material/Stack';

import theme from '../../theme';

export const Stack = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        data-testid="zds-stack"
        {...props}
      />
    </ThemeProvider>
  );
};