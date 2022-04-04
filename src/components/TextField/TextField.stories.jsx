import React from 'react';
import { TextField } from './TextField';
import FileCopyIcon from '@mui/icons-material/FileCopy';

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
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    }
  },
}  ;

const Template = (args) => {

  return (
    <TextField {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  helperText: 'some helper text',
  placeholder: 'some placeholder text',
  label: 'some label',
  disabled: false,
  error: false,
}
