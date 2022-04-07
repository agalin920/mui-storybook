import React from 'react';
import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
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
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    }
  },
}  ;

const Template = (args) => {

  return (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>  
      <Button>Three</Button>  
    </ButtonGroup>
  )
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  variant: 'outlined',
  disabled: false,
  orientation: 'horizontal',
  size: 'medium',
}
