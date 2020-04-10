import React from "react";
import { TextField } from "@material-ui/core";

const CusTextField = ({ label, type, isErr, onChange, name, onFocus }) => {
  return (
    <TextField
      label={label}
      size="small"
      fullWidth
      style={{ marginTop: 10 }}
      type={type}
      error={isErr}
      helperText={isErr && `유효하지 않습니다!`}
      onChange={onChange}
      name={name}
      onFocus={onFocus}
    />
  );
};

export default CusTextField;
