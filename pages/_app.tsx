import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from 'src/theme';

class MyApp extends App {
  public componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }

    const consoleStyles = [
      'font-size: 1rem',
      'font-weight: bold',
      `color: ${theme.palette.primary.main}`,
    ].join(';');

    console.log('%cNext.js Boilerplate by @andrewizbatista', consoleStyles); // eslint-disable-line no-console
    console.log('https://github.com/andrewizbatista/nextjs-boilerplate'); // eslint-disable-line no-console
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
