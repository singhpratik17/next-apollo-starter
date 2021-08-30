import { createTheme } from '@material-ui/core/styles';
import { colors } from './colors';
import { typography } from './typography';

const defaultTheme = createTheme();

const customTheme = createTheme({
  palette: {
    ...colors,
  },
  typography: {
    ...typography,
  },

  // Component style overrides
  overrides: {},
});

export default customTheme;
