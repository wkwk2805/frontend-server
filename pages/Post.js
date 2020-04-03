import React from "react";
import CusTopNav from "../components/post/CusTopNav";
import Content from "./Content";

const Post = () => {
  return (
    <>
      <CusTopNav />
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
