import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

import theme from '../../theme';

export const Accordion = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiAccordion
        data-testid="zds-accordion"
        {...props}
      />
    </ThemeProvider>
  );
};