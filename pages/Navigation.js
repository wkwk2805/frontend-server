import React from "react";
import Post from "./Post";
import CusBottomNav from "../components/common/CusBottomNav";
import Search from "./Search";

const Navigation = () => {
  return (
    <div>
      <Post />
      {/* <Search /> */}
      <div style={{ marginBottom: 60 }}></div>
      <CusBottomNav />
    </div>
  );
};

export default Navigation;
