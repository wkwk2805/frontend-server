import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { KeyboardBackspace, Edit, Delete } from "@material-ui/icons";

const BackCusTop = ({ text }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          style={{ backgroundColor: "#1976d2", paddingLeft: 0 }}
          variant="dense"
        >
          <IconButton style={{ color: "white" }}>
            <KeyboardBackspace />
          </IconButton>
          <Typography component="div">{text}</Typography>
          <div style={{ position: "absolute", right: 10 }}>
            <IconButton style={{ color: "white", padding: 3 }}>
              <Edit />
            </IconButton>
            <IconButton style={{ color: "white", padding: 3 }}>
              <Delete />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default BackCusTop;
