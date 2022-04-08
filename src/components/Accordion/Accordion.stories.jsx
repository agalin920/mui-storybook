import React from 'react';
import { Accordion } from '../Accordion/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import { Typography } from '../Typography/Typography';

export default {
  title: 'Accordion',
  component: Accordion,
}  ;

const Template = (args) => {

  return (
    <Accordion {...args}>
      <AccordionSummary>
        <Typography>Accordion Test</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>  
    </Accordion>
  )
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  square: false
}
