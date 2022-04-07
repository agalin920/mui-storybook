import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';

import theme from '../../theme';

export const Tooltip = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTooltip
        data-testid="zds-tooltip"
        {...props}
      />
    </ThemeProvider>
  );
};