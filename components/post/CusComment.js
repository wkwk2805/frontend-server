import React from "react";
import { Avatar, Typography, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { FavoriteBorder } from "@material-ui/icons";

const CusComment = ({ user, comment, image }) => {
  return (
    <>
      <Avatar
        aria-label="user"
        style={{
          backgroundColor: red[500],
          width: 20,
          height: 20,
          float: "left",
          marginRight: 5
        }}
      />
      <span style={{ verticalAlign: "super" }}>
        <Typography variant="caption" color="textSecondary" component="span">
          {user}
        </Typography>
        {`  `}
        <Typography variant="caption" color="textSecondary" component="span">
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
    </>
  );
};

export default CusComment;
