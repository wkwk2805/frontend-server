import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Paper,
} from "@material-ui/core";
import { PersonAdd, Group, CropFree } from "@material-ui/icons";
import CusGroup from "./CusGroup";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { showLoading } from "../../modules/loading";

const CusTopNav = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [groupView, setGroupView] = useState(false);
  const groupToggle = () => {
    setGroupView(!groupView);
  };
  const moveFriendList = () => {
    dispatch(showLoading());
    router.push("/FriendList");
  };
  const moveGroupList = () => {
    dispatch(showLoading());
    router.push("/GroupList");
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            width: "100%",
            minHeight: 20,
            backgroundColor: "#0f4c81",
          }}
        >
          <Typography style={{ width: "50%" }}>Logo Space</Typography>
          <div style={{ width: "40%", textAlign: "right" }}>
            <IconButton edge="end" color="inherit" onClick={groupToggle}>
              <Group />
            </IconButton>
            <IconButton edge="end" color="inherit" onClick={moveFriendList}>
              <PersonAdd />
            </IconButton>
          </div>
        </Toolbar>
        {groupView && (
          <Paper variant="outlined" style={{ overflow: "auto" }} square>
            <IconButton
              style={{
                padding: 5,
                margin: -5,
                marginRight: -2,
                position: "absolute",
                right: 0,
                zIndex: 1,
              }}
            >
              <CropFree
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "black",
                }}
                onClick={moveGroupList}
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
