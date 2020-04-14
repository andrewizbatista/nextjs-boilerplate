import { createMuiTheme } from '@material-ui/core/styles';

export const colors: Colors = {
  Primary: '#14ce78',
  Secondary: '#14ce78',
  TextPrimary: '#fff',
  TextSecondary: '#a1a1a1',
  Darker: '#1e1e1e',
  Lighter: '#e2e2e2',
  Error: '#ff4400',
};

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: colors.Darker,
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
      primary: colors.TextPrimary,
      secondary: colors.TextSecondary,
    },
  },
  typography: {
    fontFamily: ['monospace'].join(','),
  },
  overrides: {},
  props: {},
});

/**
 * * Media Queries
 * {
 *   fontSize: '2rem',
 *   [mediaQueries.mobile]: {
 *     fontSize: '1rem'
 *   }
 * }
 */
export const mediaQueries: MediaQueries = {
  mobile: '@media (max-width: 425px)',
  tablet: '@media (max-width: 1024px)',
  laptop: '@media (max-width: 1440px)',
  desktop: '@media (min-width: 1441px)',
};

interface Colors {
  Primary: string;
  Secondary: string;
  TextPrimary: string;
  TextSecondary: string;
  Darker: string;
  Lighter: string;
  Error: string;
}

interface MediaQueries {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}
