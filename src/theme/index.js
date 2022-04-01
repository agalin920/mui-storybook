import { palette } from './palette';
import { typography } from './typography';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette,
  typography,
});

export default theme;
