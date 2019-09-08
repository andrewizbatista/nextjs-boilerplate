import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

MyApp.getInitialProps = async ({ Component, ctx }: any): Promise<any> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
