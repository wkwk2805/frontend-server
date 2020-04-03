import React from "react";
import { Avatar, IconButton, Paper } from "@material-ui/core";
import {
  AddCircleOutline,
  RemoveCircleOutline,
  Close
} from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";

const Friend = () => {
  return (
    <Paper style={{ display: "flex", padding: 10 }} square variant="outlined">
      <Avatar />
      <div style={{ padding: 5, marginLeft: 5, paddingTop: 2 }}>
        아이디(이름)
        <div style={{ fontSize: 12 }}>상태메세지</div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 25,
          padding: 5,
          alignSelf: "center"
        }}
      >
        <IconButton style={{ padding: 5 }}>
          <AddCircleOutline style={{ color: green[300] }} />
        </IconButton>
        <IconButton style={{ padding: 5 }}>
          <RemoveCircleOutline style={{ color: red[300] }} />
        </IconButton>
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
        <Close style={{ fontSize: 13 }} />
      </IconButton>
    </Paper>
  );
};

export default Friend;
