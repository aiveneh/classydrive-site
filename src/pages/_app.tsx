import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { configureStore, epicMiddleware } from '../redux/store';
import rootEpic from '../redux/rootEpic';
import MainLayout from '../layouts/main';
import { getAsset } from '../utils';

export default function App({ Component, pageProps }) {
  const store = configureStore(pageProps.initialReduxState);
  epicMiddleware.run(rootEpic);

  const { title, description } = pageProps;

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href={getAsset('img/favicon.png')} type="image/x-icon" />

        <title>{title}</title>

        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://classydrivenigeria.com" />
        <meta property="og:image" content={getAsset('img/home_screenshot.png')} />
        <meta property="og:site_name" content="StoreJars" />
        <meta property="fb:app_id" content="1010365906114581" />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content="http://classydrivenigeria.com" />
        <meta property="twitter:image" content={getAsset('img/home_screenshot.png')} />
        <meta property="twitter:card" content={getAsset('img/home_screenshot.png')} />
        <meta name="twitter:site" content="@storejars" />
        <meta name="twitter:image:alt" content="StoreJars" />

        <link rel="stylesheet" href={getAsset('bootstrap/css/bootstrap.min.css')} />
        <link rel="stylesheet" href={getAsset('css/animate.css')} />
        <link rel="stylesheet" href={getAsset('css/main.css')} />
        <link rel="stylesheet" href={getAsset('css/plugin.css')} />
        <link rel="stylesheet" href={getAsset('css/style.css')} />
        <link rel="stylesheet" href={getAsset('css/custom.css')} />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
