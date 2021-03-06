import React from 'react';
import { Button } from './Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'select' },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    }
  },
}  ;

const Template = (args) => {

  return (
    <Button {...args}>Button</Button>
  )
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  variant: 'contained',
  disabled: false,
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  color: 'primary',
  variant: 'contained',
  disabled: false,
  startIcon: <FileCopyIcon />
}