import React from "react";
import { Container, Button } from "@material-ui/core";
import Link from "next/link";
import CusTextField from "../components/auth/CusTextField";
import CusAnchor from "../components/common/CusAnchor";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <CusTextField label="아이디" />
      <CusTextField label="비밀번호" type="password" />
      <div style={{ textAlign: "center", margin: 10 }}>
        <Link href="/Navigation">
          <Button variant="contained" color="primary">
            로그인
          </Button>
        </Link>
      </div>
      <div style={{ textAlign: "center", margin: 10, fontSize: 14 }}>
        <CusAnchor href="/Signup" text="회원가입" />
      </div>
    </Container>
  );
};

export default Login;
