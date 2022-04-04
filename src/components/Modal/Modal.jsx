import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiModal, { ModalProps } from '@mui/material/Modal';

import theme from '../../theme';

export const Modal = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiModal
        data-testid="zds-modal"
        {...props}
      />
    </ThemeProvider>
  );
};

