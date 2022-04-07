import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';

import theme from '../../theme';

export const Typography = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography
        data-testid="zds-typography"
        {...props}
      />
    </ThemeProvider>
  );
};
