import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme();

export const colors: {
  Primary: string;
  Secondary: string;
  Dark: string;
  Light: string;
  LightDarker: string;
  Error: string;
} = {
  Primary: '#14ce78',
  Secondary: '#14ce78',
  Dark: '#1e1e1e',
  Light: '#e2e2e2',
  LightDarker: '#a1a1a1',
  Error: '#ff4400',
};

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: colors.Dark,
    },
    primary: {
      main: colors.Primary,
    },
    secondary: {
      main: colors.Secondary,
    },
    error: {
      main: colors.Error,
    },
    text: {
      primary: colors.Light,
      secondary: colors.LightDarker,
    },
  },
  typography: {
    fontFamily: ['monospace'].join(','),
  },
  overrides: {},
  props: {},
});
