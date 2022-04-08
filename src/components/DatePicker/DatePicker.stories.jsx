import React from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import { TextField } from '../TextField/TextField';

export default {
  title: 'DatePicker',
  component: DatePicker,
}  ;

const Template = (args) => {

  return (
    <DatePicker {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  renderInput: (params) => (
    <TextField {...params} />
  ),
  allowSameDateSelection: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  value: new Date(),
  disabled: false,
  disableHighlightToday: false,
  disableOpenPicker: false,
  loading: false,
  okText: 'OK',
  readOnly: false,
  showTodayButton: false,
  showToolbar: false,
  todayText: 'Today',
  toolbarTitle: 'Select date',
  toolbarPlaceholder: '-',
  onChange: () => {},
}
