import React from "react";
import { Avatar } from "@material-ui/core";

const GroupUesr = ({ name, image, position }) => {
  return (
    <span style={{ padding: 10 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          alt="Group1"
          src={`/images/${image}`}
          style={{
            alignSelf: "center",
            justifySelf: "center !important",
            width: 40,
            height: 40
          }}
        />
      </div>
      <div
        style={{
          fontSize: 12,
          display: "flex",
          justifyContent: "center"
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 11, display: "flex", justifyContent: "center" }}>
        {position}
      </div>
    </span>
  );
};

export default GroupUesr;
