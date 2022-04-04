import React from 'react';
import { Modal } from './Modal';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default {
  title: 'Modal',
  component: Modal,
  // argTypes: {
  //   color: {
  //     options: ['primary', 'secondary', 'tertiary', 'error'],
  //     control: { type: 'select' },
  //   },
  //   variant: {
  //     options: ['filled', 'outlined', 'standard'],
  //     control: { type: 'radio' },
  //   },
  //   disabled: {
  //     control: 'boolean',
  //   },
  //   error: {
  //     control: 'boolean',
  //   }
  // },
}  ;

const Template = (args) => {
  return (
    <div>
      <h1>Page content</h1>
      <Modal {...args} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  children: <div style={{backgroundColor: '#fff'}}>Modal Content</div>,
  disablePortal: false,
}
