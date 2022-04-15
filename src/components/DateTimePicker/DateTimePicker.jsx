import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MuiDateTimePicker from '@mui/lab/DateTimePicker';

export const DateTimePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateTimePicker
        data-testid="zds-date-time-pickert"
        {...props}
      />
    </LocalizationProvider>
  );
}