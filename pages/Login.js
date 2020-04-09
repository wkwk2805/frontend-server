import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Button } from "@material-ui/core";
import Link from "next/link";
import CusTextField from "../components/auth/CusTextField";
import CusAnchor from "../components/common/CusAnchor";
import { showLoading } from "../modules/loading";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const loginSubmit = () => {
    dispatch(showLoading());
    router.push("/Nav");
  };
  return (
    <>
      <Container maxWidth="sm">
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <img src="/images/sample.jpg" alt="" width="200" />
        </div>
        <CusTextField label="아이디" type="id" />
        <CusTextField label="비밀번호" type="password" />
        <div style={{ textAlign: "center", margin: 10 }}>
          <Button variant="contained" color="primary" onClick={loginSubmit}>
            로그인
          </Button>
        </div>
        <div style={{ textAlign: "center", margin: 10, fontSize: 14 }}>
          <CusAnchor href="/Signup" text="회원가입" />
        </div>
      </Container>
    </>
  );
};

export default Login;
