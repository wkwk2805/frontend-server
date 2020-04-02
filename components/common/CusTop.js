import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const CusTop = ({ text }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#1976d2" }} variant="dense">
          <Typography component="div">{text}</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default CusTop;
