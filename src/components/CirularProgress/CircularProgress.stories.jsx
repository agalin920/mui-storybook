import React from 'react';
import { CircularProgress } from './CircularProgress';

export default {
  title: 'CircularProgress',
  component: CircularProgress,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'select' },
    },
    variant: {
      options: ['indeterminate', 'determinate'],
      control: { type: 'radio' },
    },
  },
}  ;

const Template = (args) => {

  return (
    <CircularProgress {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  variant: 'contained',
  disableShrink: false,
  size: 40,
  thickness: 3.6,
  value: 0,
  variant: 'indeterminate'
}