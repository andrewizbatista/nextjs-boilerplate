import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import appConfig from 'src/config';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  // public setGoogleAnalytics() {
  //   return {
  //     __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', 'UA-151404517-1');`,
  //   };
  // }

  public render() {
    return (
      <Html lang={appConfig.defaultLocale.code}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            httpEquiv="Content-Language"
            content={appConfig.defaultLocale.code}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="language" content={appConfig.defaultLocale.code} />
          <meta name="reference" content={appConfig.appName} />
          <meta name="theme-color" content={appConfig.appThemeColor} />
          <meta name="robots" content="index,follow" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          {/* <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> */}
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:400,700"
          /> */}
          <link rel="stylesheet" href="/css/main.css" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/meta/icon-192x192.png"
          />
          {/* <script
            async
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=UA-151404517-1"
          /> */}
          {/* eslint-disable-next-line react/no-danger */}
          {/* <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
