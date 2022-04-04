import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

import theme from '../../theme';

export const TextField = (
  // allow nested component props to be extended/overwritten
  // InputProps,
  // InputLabelProps,
  // FormHelperTextProps,
  props
) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        data-testid="zds-text-field"
        // variant="standard"
        // InputProps={{
        //   ...InputProps,
        // }}
        // InputLabelProps={{
        //   ...InputLabelProps,
        // }}
        // FormHelperTextProps={{ ...FormHelperTextProps }}
        {...props}
      />
    </ThemeProvider>
  );
};

// const MuiTextFieldStyled = styled(MuiTextField)<TextFieldProps>(
//   ({ theme }) => ({
//   })
// );
