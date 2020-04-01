import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AppBar, Toolbar } from "@material-ui/core";

export default function CustomizedInputBase() {
  return (
    <AppBar>
      <Toolbar style={{ backgroundColor: "#1976d2" }}>
        <InputBase
          placeholder="검색하기..."
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: 5,
            paddingLeft: 10
          }}
          color="primary"
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
