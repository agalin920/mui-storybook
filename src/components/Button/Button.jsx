import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

const Button = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        data-testid="mds-button"
        {...props}
      />
    </ThemeProvider>
  );
};

export default Button;

// const MuiButtonStyled = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  
// }));
