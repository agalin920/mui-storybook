import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiSwitch, { TooltipProps } from '@mui/material/Switch';

import theme from '../../theme';

export const Switch = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiSwitch
        data-testid="zds-switch"
        {...props}
      />
    </ThemeProvider>
  );
};