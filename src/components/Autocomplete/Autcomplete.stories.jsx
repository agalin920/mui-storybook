import React from 'react';
import { Autocomplete } from './Autocomplete';
import { TextField } from '../TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default {
  title: 'Autocomplete',
  component: Autocomplete,
}  ;

const Template = (args) => {

  return (
    <Autocomplete {...args}>
      
      </Autocomplete>
  )
};

export const Default = Template.bind({});
Default.args = {
  renderInput:  (params) => <TextField {...params} label="Autocomplete" InputProps={{
    ...params.InputProps,
    placeholder: 'Autocomplete',
    startAdornment: <SearchIcon />
  }}  />,
  options: ['Andres', 'Stuart', 'David', 'Randy', 'Fares', 'Mukesh'],
  disablePortal: false,
  disabled: false,
}
