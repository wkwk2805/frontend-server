import React, { useEffect, useState } from "react";
import Head from "next/head";
import rootReducer from "../modules";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Loading from "../components/common/Loading";
import { Container } from "@material-ui/core";

const store = createStore(rootReducer);

const AppWithRedux = ({ Component, pageProps }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.isMobile);
  }, []);
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
        {isMobile ? (
          <Component {...pageProps} />
        ) : (
          <Container maxWidth="sm">
            <Component {...pageProps} />
          </Container>
        )}
      </Provider>
    </>
  );
};

export default AppWithRedux;
