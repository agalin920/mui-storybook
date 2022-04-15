import React, { useState, useRef, useEffect } from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

import theme from '../../theme';

export const ControlledTextField = (
  {onChange, value, ...props}
) => {
  const [cursor, setCursor] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const input = ref.current;
    input?.setSelectionRange(cursor, cursor)
  }, [ref, cursor, value]);

  const handleChange = (e) => {
    setCursor(e.target.selectionStart);
    onChange && onChange(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        data-testid="zds-text-field"
        value={value}
        onChange={handleChange}
        inputProps={{ ref }}
        {...props}
      />
    </ThemeProvider>
  );
};

// const MuiTextFieldStyled = styled(MuiTextField)<TextFieldProps>(
//   ({ theme }) => ({
//   })
// );
