import React from 'react';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      options: ['bottom-end'
      , 'bottom-start'
      , 'bottom'
      , 'left-end'
      , 'left-start'
      , 'left'
      , 'right-end'
      , 'right-start'
      , 'right'
      , 'top-end'
      , 'top-start'
      , 'top'
      ],
      control: { type: 'select' },
    },
  },
}  ;

const Template = (args) => {

  return (
    <Box sx={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <Box>
        <Tooltip {...args}>
          <Button variant="contained">Wrapped by tooltip</Button> 
        </Tooltip>
      </Box>
    </Box>
  )
};

export const Default = Template.bind({});
Default.args = {
  title: 'Tooltip content',
  arrow: true,
  placement: 'bottom'
}
