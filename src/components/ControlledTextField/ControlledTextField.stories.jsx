import React, { useState } from 'react';
import { ControlledTextField } from './ControlledTextField';

export default {
  title: 'ControlledTextField',
  component: ControlledTextField,
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
  const [value, setValue] = useState('');

  return (
    <ControlledTextField
      value={value}
      onChange={(e) => setValue(e.target.value.replace(' ', '-'))}
      {...args}
    />
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
