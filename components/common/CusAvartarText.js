import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const CusAvartarText = ({ text, image }) => {
  return (
    <div style={{ margin: 5 }}>
      <Avatar
        aria-label="user"
        style={{
          backgroundColor: red[500],
          width: 25,
          height: 25,
          float: "left",
          marginRight: 10
        }}
        src={image}
      />
      <span style={{ verticalAlign: "super" }}>
        <Typography variant="body2" component="span">
          {text}
        </Typography>
      </span>
    </div>
  );
};

export default CusAvartarText;
