import * as React from 'react';
import Box from '@mui/material/Box';

import { FixedSizeList } from 'react-window';

export const VirtualizedList = React.forwardRef((props, ref) => {
  return (
      <FixedSizeList
        ref={ref}
        {...props}
      />
  );
});