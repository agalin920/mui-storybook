import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MuiDatePicker from '@mui/lab/DatePicker';

export const DatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        data-testid="zds-tooltip"
        {...props}
      />
    </LocalizationProvider>
  );
}