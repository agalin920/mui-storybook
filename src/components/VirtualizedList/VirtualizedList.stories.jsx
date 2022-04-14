import React from 'react';
import { VirtualizedList } from './VirtualizedList';
import { Box } from '../Box/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default {
  title: 'VirtualizedList',
  component: VirtualizedList,
};

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const Template = (args) => {
  return (
    <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
      <VirtualizedList {...args}>
        {renderRow}  
      </VirtualizedList>
    </Box>
  )
};

export const Default = Template.bind({});
Default.args = {
  height: 400,
  width: 360,
  itemSize: 46,
  itemCount: 200,
}