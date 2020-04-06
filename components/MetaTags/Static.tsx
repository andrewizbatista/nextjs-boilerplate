import React from 'react';
import { Head } from 'next/document';

import appConfig from 'src/config';

const {
  appName,
  appThemeColor,
  googleFonts,
  defaultLocale,
  developerSignature,
} = appConfig;

const StaticMetaTags = ({}: StaticMetaTagsProps) => {
  const importedGoogleFonts = googleFonts?.join('|');
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Language" content={defaultLocale.code} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="generator" content={developerSignature} />
      <meta name="language" content={defaultLocale.code} />
      <meta name="reference" content={appName} />
      <meta name="theme-color" content={appThemeColor} />
      <meta name="robots" content="index,follow" />
      <link rel="manifest" href="/manifest.json" />
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
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/meta/icon-192x192.png"
      />
    </Head>
  );
};

export interface StaticMetaTagsProps {}

export default StaticMetaTags;
