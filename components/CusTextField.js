import React from "react";
import { TextField } from "@material-ui/core";

const CusTextField = ({ label, type, isErr }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      style={{ marginTop: 10 }}
      type={type}
      error={isErr}
      helperText={isErr && `유효하지 않습니다!`}
    />
  );
};

export default CusTextField;
