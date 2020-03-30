import React from "react";
import { Container, Button, TextField } from "@material-ui/core";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <TextField
        label="ID"
        variant="outlined"
        size="small"
        fullWidth
        style={{ marginTop: 10 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        fullWidth
        type="password"
        style={{ marginTop: 10 }}
      />
      <div style={{ textAlign: "center", margin: 10 }}>
        <Button variant="contained" color="primary">
          로그인
        </Button>
      </div>
      <div style={{ textAlign: "center", margin: 10, fontSize: 14 }}>
        회원가입
      </div>
    </Container>
  );
};

export default Login;
