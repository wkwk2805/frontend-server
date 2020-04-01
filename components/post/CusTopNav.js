import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import { PersonAdd, Group } from "@material-ui/icons";

const CusTopNav = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            width: "100%",
            minHeight: 20,
            backgroundColor: "#0f4c81"
          }}
        >
          <Typography style={{ width: "50%" }}>Logo Space</Typography>
          <div style={{ width: "40%", textAlign: "right" }}>
            <IconButton edge="end" color="inherit">
              <Group />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <PersonAdd />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CusTopNav;
