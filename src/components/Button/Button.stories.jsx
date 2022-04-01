import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
}  ;

const Template = (args) => {

  return (
    <Button {...args}>Button</Button>
  )
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
}
