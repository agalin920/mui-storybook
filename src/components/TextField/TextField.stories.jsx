import React from 'react';
import { TextField } from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outlined', 'standard'],
      control: { type: 'radio' },
    },
  },
}  ;

const Template = (args) => {

  return (
    <TextField {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  helperText: 'some helper text',
  placeholder: 'some placeholder text',
  label: 'some label',
  disabled: false,
  error: false,
  multiline: false,
  rows: 1,
  required: false,
}
