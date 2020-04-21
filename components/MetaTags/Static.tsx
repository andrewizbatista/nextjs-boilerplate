import React from 'react';
import { Head } from 'next/document';

import appConfig from 'src/appConfig';

const {
  APP_NAME,
  APP_DOMAIN,
  THEME_COLOR,
  LOCALES,
  GOOGLE_FONTS,
  DEV_SIGNATURE,
} = appConfig;

const defaultLocale: Locale = LOCALES[0];
const importedGoogleFonts: string = GOOGLE_FONTS?.join('|');
const metaIconSizes: string[] = ['36', '48', '72', '96', '144', '192'];

const StaticMetaTags = ({}: StaticMetaTagsProps) => {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Language" content={defaultLocale.CODE} />
      <meta name="generator" content={DEV_SIGNATURE} />
      <meta name="language" content={defaultLocale.CODE} />
      <meta name="reference" content={APP_NAME} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="robots" content="index,follow" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="canonical" href={APP_DOMAIN} />
      <link rel="manifest" href="/manifest.json" />
      {metaIconSizes &&
        metaIconSizes.map((size) => {
          const xSize = `${size}x${size}`;
          return (
            <link
              rel="icon"
              type="image/png"
              sizes={xSize}
              href={`/meta/icon-${xSize}.png`}
            />
          );
        })}
      {importedGoogleFonts && (
        <>
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${importedGoogleFonts}`}
          />
        </>
      )}
      <link rel="stylesheet" href="/css/main.css" />
    </Head>
  );
};

export interface StaticMetaTagsProps {}

export default StaticMetaTags;
