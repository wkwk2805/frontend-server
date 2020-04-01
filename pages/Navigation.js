import React from "react";
import CusBottomNav from "../components/CusBottomNav";
import CusTopNav from "../components/CusTopNav";
import Post from "./Post";
import CusGroup from "../components/CusGroup";
import { Paper } from "@material-ui/core";

const Navigation = () => {
  return (
    <>
      <CusTopNav />
      <div style={{ marginTop: 60 }}></div>
      <Paper variant="outlined" style={{ overflow: "auto" }}>
        <table>
          <tbody>
            <tr>
              <CusGroup />
              <CusGroup />
            </tr>
          </tbody>
        </table>
      </Paper>
      <Post />
      <div style={{ marginBottom: 60 }}></div>
      <CusBottomNav />
    </>
  );
};

export default Navigation;
