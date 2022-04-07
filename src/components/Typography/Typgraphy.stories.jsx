import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['body1'
      , 'body2'
      , 'button'
      , 'caption'
      , 'h1'
      , 'h2'
      , 'h3'
      , 'h4'
      , 'h5'
      , 'h6'
      , 'inherit'
      , 'overline'
      , 'subtitle1'
      , 'subtitle2'
      ],
      control: { type: 'select' },
    },
  },
}  ;

const Template = (args) => {

  return (
    <Typography {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  variant: 'body1',
  children: 'Hello World'
}