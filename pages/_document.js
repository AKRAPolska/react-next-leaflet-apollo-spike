import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import stylesheet from 'antd/dist/antd.min.css';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="pl">
        <Head>
          <title>My page</title>
          <link href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

injectGlobal`
  ${stylesheet}

  body, html {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body>div, #__next, #__next>div, #__next>div>div {
    height: 100%;
  }

  .sr-only {
    display: none;
  }
`;
