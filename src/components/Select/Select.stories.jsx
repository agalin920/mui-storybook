import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
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
  },
}  ;

const Template = (args) => {

  return (
    <Select {...args}>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      </Select>
  )
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  label: 'some label',
  disabled: false,
  variant: 'outlined',
  value: 1,
}
