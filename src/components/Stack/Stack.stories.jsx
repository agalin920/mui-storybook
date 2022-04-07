import React from 'react';
import { Button } from '../Button/Button';
import { Stack } from './Stack';

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    direction: {
      options: ['column-reverse'
      , 'column'
      , 'row-reverse'
      , 'row'
      ],
      control: { type: 'select' },
    },
    spacing: {
      control: 'number',
    }
  },
}  ;

const Template = (args) => {

  return (
    <Stack {...args}>
      <Button variant="contained">One</Button>
      <Button variant="contained">Two</Button>  
      <Button variant="contained">Three</Button>  
    </Stack>
  )
};

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  spacing: 0,
}
