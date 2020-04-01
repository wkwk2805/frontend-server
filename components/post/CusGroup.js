import React from "react";
import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const CusGroup = ({ name, image, active }) => {
  return (
    <span
      style={{
        padding: 10,
        width: 50,
        textAlign: "center",
        display: "table-cell"
      }}
    >
      <Avatar
        alt="Group1"
        src={`/images/${image}`}
        style={{
          border: `1.8px solid ${active ? red[300] : "grey"}`,
          alignSelf: "center",
          width: 50,
          height: 50
        }}
      />
      <div style={{ fontSize: 11, display: "block" }}>{name}</div>
    </span>
  );
};

export default CusGroup;
