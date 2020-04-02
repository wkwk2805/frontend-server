import React from "react";
import CusTopNav from "../components/post/CusTopNav";
import Content from "./Content";
import CusGroup from "../components/post/CusGroup";
import { Paper, IconButton } from "@material-ui/core";
import { CropFree } from "@material-ui/icons";

const Post = () => {
  return (
    <>
      <CusTopNav />
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
          <CropFree style={{ fontSize: 20, fontWeight: 600, color: "black" }} />
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
