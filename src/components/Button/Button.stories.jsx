import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'naimify', 'error'],
      control: { type: 'select' },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
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