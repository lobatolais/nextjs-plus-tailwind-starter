import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="keyword" />
          <meta name="description" content="Site description" />
          <meta
            property="og:description"
            content="Site description"
            key="ogdesc"
          />
          <meta property="og:title" content="Site title" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
