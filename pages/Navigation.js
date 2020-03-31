import React from "react";
import CusBottomNav from "../components/CusBottomNav";
import CusTopNav from "../components/CusTopNav";
import Post from "./Post";

const Navigation = () => {
  return (
    <>
      <CusTopNav />
      <div style={{ marginTop: 60 }}></div>
      <Post />
      <Post />
      <Post />
      <div style={{ marginBottom: 60 }}></div>
      <CusBottomNav />
    </>
  );
};

export default Navigation;
