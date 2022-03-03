import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getAsset } from '../utils';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />

          <NextScript />

          <script src={getAsset('js/jquery-2.2.4.min.js')}></script>
          <script src={getAsset('js/jquery-migrate-1.4.1.min.js')}></script>
          <script src={getAsset('bootstrap/js/bootstrap.min.js')}></script>

          <script src={getAsset('js/jquery.waypoints.min.js')}></script>

          <script src={getAsset('js/jquery.waypoints.min.js')}></script>
          <script src={getAsset('js/jquery.easing.1.3.js')}></script>
          <script src={getAsset('js/SmoothScroll.min.js')}></script>
          <script src={getAsset('js/jquery.slicknav.min.js')}></script>
          <script src={getAsset('js/jquery.placeholder.min.js')}></script>
          <script src={getAsset('js/fancySelect.js')}></script>

          <script src={getAsset('js/slick.min.js')}></script>
          <script src={getAsset('js/bootstrap-modalmanager.js')}></script>
          <script src={getAsset('js/bootstrap-modal.js')}></script>

          <script src={getAsset('js/bootstrap-modal.js')}></script>
          <script src={getAsset('js/customs.js')}></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
