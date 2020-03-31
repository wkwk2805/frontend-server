import React from "react";
import { Container, Button } from "@material-ui/core";
import CusTextField from "../components/CusTextField";
import CusAnchor from "../components/CusAnchor";

const Signup = () => {
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <CusTextField label="아이디" />
      <CusTextField label="비밀번호" type="password" />
      <CusTextField label="비밀번호확인" type="password" />
      <div style={{ textAlign: "center", margin: 10 }}>
        <Button variant="contained" color="primary">
          회원가입
        </Button>
      </div>
      <div style={{ textAlign: "center", margin: 10, fontSize: 14 }}>
        <CusAnchor href="/" text="로그인" />
      </div>
    </Container>
  );
};

export default Signup;
