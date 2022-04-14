import React, {useState, useRef, useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '../Select/Select';
import { VirtualizedList } from '../VirtualizedList/VirtualizedList';

export default {
  title: 'VirtualizedSelect',
  component: Select,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outlined', 'standard'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
  },
}  ;

const Template = (args) => {
  const listRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState(0);
  const [open, setOpen] = useState(false);

  const renderRow = (props) => {
    const { index, style } = props;
    return (
      <MenuItem
      color={args.color}
      className={index === selectedValue ? 'Mui-selected' : ''}
      style={style}
      key={index}
      value={index}
      onClick={() => {
        setSelectedValue(index);
        setOpen(false);
        }}>
        Item {index}
      </MenuItem>
    );
  }

  return (
    <Select
      {...args}
      value={selectedValue}
      onOpen={() => {
        setOpen(true);
        // Delay action within event loop to allow rendering of the list
        // No existing methods allow us to do this any other way
        setTimeout(() => listRef.current?.scrollToItem(selectedValue), 0);
      }}
      onClose={() => setOpen(false)}
      open={open}
      renderValue={(value) => <span>Item {value}</span>}
    >
      <VirtualizedList 
        ref={listRef}
        height={400}
        itemCount={1000}
        itemSize={48}
        width={360}
      >
        {renderRow}  
      </VirtualizedList>
    </Select>
  )
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  label: 'some label',
  disabled: false,
  variant: 'outlined',
}
