import React from "react";
import Head from "next/head";
import rootReducer from "../modules";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Loading from "../components/common/Loading";

const store = createStore(rootReducer);

const AppWithRedux = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="stylesheet" href="/css/common.css" />
      </Head>
      <Provider store={store}>
        <Loading />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default AppWithRedux;
