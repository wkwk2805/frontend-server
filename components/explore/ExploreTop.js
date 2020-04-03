import React from "react";
import { Search } from "@material-ui/icons";
import { AppBar, Toolbar, InputBase, IconButton } from "@material-ui/core";

const ExploreTop = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          style={{ backgroundColor: "rgb(15, 76, 129)" }}
          variant="dense"
        >
          <InputBase
            className="placeholder-style"
            placeholder="검색"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: 5,
              paddingLeft: 10,
              width: "100%"
            }}
            color="primary"
          />
          <IconButton>
            <Search style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default ExploreTop;
