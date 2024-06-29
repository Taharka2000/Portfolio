/* eslint-disable @next/next/no-page-custom-font */
// RootLayout.tsx
import { Fragment } from 'react';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website Portfolio',
  description: 'Portfolio website design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <html lang="en">
          {children}
        </html>
      </body>
    </Fragment>
  );
}
