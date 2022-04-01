import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

const Button = (props) => {
  return (
      <MuiButton
        data-testid="mds-button"
        {...props}
      />
  );
};

export default Button;

// const MuiButtonStyled = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  
// }));
