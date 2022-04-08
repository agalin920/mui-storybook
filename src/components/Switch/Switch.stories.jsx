import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
}  ;

const Template = (args) => {

  return (
    <Switch {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  size: 'medium',
  disabled: false,
}
