import React, { Children } from 'react';
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import StaticMetaTags from 'components/MetaTags/Static';
import appConfig from 'src/appConfig';

const { LOCALES } = appConfig;
const defaultLocale = LOCALES[0];

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
        ...Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  public render() {
    return (
      <Html lang={defaultLocale.CODE}>
        <StaticMetaTags />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
