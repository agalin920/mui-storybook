import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

import theme from '../../theme';

export const Button = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        data-testid="zds-button"
        {...props}
      />
    </ThemeProvider>
  );
};

// const MuiButtonStyled = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  
// }));
