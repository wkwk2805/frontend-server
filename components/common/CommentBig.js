import React from "react";
import { Avatar, Typography, IconButton, Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { FavoriteBorder } from "@material-ui/icons";

const CommentBig = ({ user, comment, image }) => {
  return (
    <div style={{ margin: 5 }}>
      <Avatar
        aria-label="user"
        style={{
          backgroundColor: red[500],
          width: 35,
          height: 35,
          float: "left",
          marginRight: 5
        }}
        src={image}
      />
      <span style={{ verticalAlign: "text-bottom" }}>
        <Typography variant="subtitle2" component="span">
          {user}
        </Typography>
        {`  `}
        <Typography variant="caption" component="span">
          {comment}
        </Typography>
      </span>
      <div
        style={{
          display: "inline-block",
          float: "right"
        }}
      >
        <IconButton style={{ verticalAlign: "middle", padding: 5 }}>
          <FavoriteBorder fontSize="small" />
        </IconButton>
      </div>
      <Button
        style={{
          display: "block",
          fontSize: 11,
          padding: 0,
          textAlign: "left"
        }}
      >
        답글달기
      </Button>
    </div>
  );
};

export default CommentBig;
