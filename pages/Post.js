import React from "react";
import CusTopNav from "../components/post/CusTopNav";
import Content from "./Content";
import CusGroup from "../components/post/CusGroup";
import { Paper, IconButton } from "@material-ui/core";
import Head from "next/head";
import { CropFree } from "@material-ui/icons";

const Post = () => {
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
      </Head>
      <CusTopNav />
      <div style={{ marginTop: 60 }}></div>
      {/* groups */}
      <Paper variant="outlined" style={{ overflow: "auto" }}>
        <IconButton
          style={{
            padding: 0,
            margin: 0,
            position: "absolute",
            right: 10,
            zIndex: 1
          }}
        >
          <CropFree style={{ fontSize: 18, fontWeight: 600 }} />
        </IconButton>
        <CusGroup name="그룹1" image="sample.jpg" active />
        <CusGroup name="그룹2" image="sample.jpg" />
        <CusGroup name="그룹3" image="sample.jpg" />
        <CusGroup name="그룹4" image="sample.jpg" />
        <CusGroup name="그룹4" image="sample.jpg" />
        <CusGroup name="그룹4" image="sample.jpg" />
        <CusGroup name="그룹4" image="sample.jpg" />
      </Paper>
      {/* posts */}
      <div>
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </>
  );
};

export default Post;
