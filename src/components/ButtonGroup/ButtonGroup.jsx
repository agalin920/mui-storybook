import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';

import theme from '../../theme';

export const ButtonGroup = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButtonGroup
        data-testid="zds-button-group"
        {...props}
      />
    </ThemeProvider>
  );
};