import React from 'react';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { TextField } from '../TextField/TextField';

export default {
  title: 'DateTimePicker',
  component: DateTimePicker,
}  ;

const Template = (args) => {

  return (
    <DateTimePicker {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  renderInput: (params) => (
    <TextField {...params} />
  ),
  onChange: () => {},
}
