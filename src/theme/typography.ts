import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { createMuiTheme } from '@material-ui/core/styles';

const { breakpoints } = createMuiTheme();

const typography: TypographyOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Raleway',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ].join(','),
  h1: {
    [breakpoints.down('xs')]: {
      fontSize: '2.50rem',
    },
  },
  h2: {
    [breakpoints.down('xs')]: {
      fontSize: '2.30rem',
    },
  },
  h3: {
    fontWeight: 300,
    [breakpoints.down('xs')]: {
      fontSize: '2.20rem',
    },
  },
  h6: {
    fontWeight: 600,
  },
};

export default typography;
