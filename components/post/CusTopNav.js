import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Paper
} from "@material-ui/core";
import { PersonAdd, Group, CropFree } from "@material-ui/icons";
import CusGroup from "./CusGroup";

const CusTopNav = () => {
  const [groupView, setGroupView] = useState(false);
  const groupToggle = () => {
    setGroupView(!groupView);
  };
  return (
    <>
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
            <IconButton edge="end" color="inherit" onClick={groupToggle}>
              <Group />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <PersonAdd />
            </IconButton>
          </div>
        </Toolbar>
        {groupView && (
          <Paper variant="outlined" style={{ overflow: "auto" }} square>
            <IconButton
              style={{
                padding: 0,
                margin: 0,
                position: "absolute",
                right: 10,
                zIndex: 1
              }}
            >
              <CropFree
                style={{ fontSize: 20, fontWeight: 600, color: "black" }}
              />
            </IconButton>
            <CusGroup name="그룹1" image="sample.jpg" active />
            <CusGroup name="그룹2" image="sample.jpg" />
            <CusGroup name="그룹3" image="sample.jpg" />
            <CusGroup name="그룹4" image="sample.jpg" />
            <CusGroup name="그룹4" image="sample.jpg" />
            <CusGroup name="그룹4" image="sample.jpg" />
            <CusGroup name="그룹4" image="sample.jpg" />
          </Paper>
        )}
      </AppBar>
      <div style={{ marginTop: 60 + (groupView && 70) }}></div>
    </>
  );
};

export default CusTopNav;
