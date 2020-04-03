import React from "react";
import { Avatar, IconButton, Paper } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

const Group = ({ _onClick }) => {
  return (
    <Paper
      style={{ display: "flex", padding: 10 }}
      square
      variant="outlined"
      onClick={_onClick}
    >
      <Avatar
        style={{
          width: 50,
          height: 50
        }}
      />
      <div style={{ padding: 5, marginLeft: 5, paddingTop: 2 }}>
        <div style={{ fontSize: 14 }}>그룹이름</div>
        <div style={{ fontSize: 11 }}>그룹 자세한 설명</div>
        <div style={{ fontSize: 12 }}>멤버수 10</div>
      </div>
      <IconButton
        style={{
          padding: 3,
          position: "absolute",
          right: 15,
          marginTop: -8,
          marginRight: -5
        }}
      >
        <HighlightOff fontSize="small" style={{ color: red[300] }} />
      </IconButton>
    </Paper>
  );
};

export default Group;
