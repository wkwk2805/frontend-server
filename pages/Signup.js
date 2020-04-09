import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import CusTextField from "../components/auth/CusTextField";
import CusAnchor from "../components/common/CusAnchor";

const Signup = () => {
  const [userInfo, setUserInfo] = useState();
  const signup = () => {
    console.log(userInfo);
  };
  const _onChange = (e) => {
    setUserInfo({ [e.target.name]: e.target.value, ...userInfo });
  };
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <CusTextField label="아이디" name="id" onChange={_onChange} />
      <CusTextField
        label="비밀번호"
        name="password"
        type="password"
        onChange={_onChange}
      />
      <CusTextField label="비밀번호확인" type="password" onChange={_onChange} />
      <div style={{ textAlign: "center", margin: 10 }}>
        <Button variant="contained" color="primary" onClick={signup}>
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
