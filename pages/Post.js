import React, { useState } from "react";
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
