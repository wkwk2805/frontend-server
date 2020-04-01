import React from "react";
import { Paper, Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const CusGroup = () => {
  return (
    <td style={{ padding: 10, width: 50, textAlign: "-webkit-center" }}>
      <Avatar
        alt="Group1"
        src="/images/sample.jpg"
        style={{
          border: `2px solid ${red[300]}`,
          alignSelf: "center",
          width: 50,
          height: 50
        }}
      />
      <div style={{ fontSize: 11 }}>그룹123 fdsa fdsa</div>
    </td>
  );
};

export default CusGroup;
