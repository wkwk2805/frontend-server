import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import CusTextField from "../components/auth/CusTextField";
import CusAnchor from "../components/common/CusAnchor";
import axios from "axios";
import { hostName } from "../common/Util";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState({});
  const signup = async () => {
    if (!isValidation()) {
      return;
    }
    const { data } = await axios.put(`${hostName()}/auth`, userInfo);
    alert(data.message);
    if (data.success) {
      localStorage.setItem("token", data.returnValue);
      // router.push("/Login");
    }
  };
  const _onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const isValidation = () => {
    let isValidation = true;
    if (!userInfo.id || userInfo.id.trim() === "") {
      setError({ id: true });
      alert("아이디를 입력해주세요!");
      isValidation = false;
    } else if (!userInfo.password || userInfo.password.trim() === "") {
      alert("비밀번호를 입력해주세요!");
      setError({ password: true });
      isValidation = false;
    } else if (!userInfo.confirm || userInfo.confirm.trim() === "") {
      alert("비밀번호 확인을 입력해주세요!");
      setError({ confirm: true });
      isValidation = false;
    } else if (userInfo.password !== userInfo.confirm) {
      alert("비밀번호와 비밀번호 확인이 다릅니다");
      setError({ password: true, confirm: true });
      isValidation = false;
    }
    return isValidation;
  };
  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <img src="/images/sample.jpg" alt="" width="200" />
      </div>
      <CusTextField
        label="아이디"
        name="id"
        onChange={_onChange}
        isErr={error.id}
        onFocus={() => setError({ ...error, id: false })}
      />
      <CusTextField
        label="비밀번호"
        name="password"
        type="password"
        onChange={_onChange}
        isErr={error.password}
        onFocus={() => setError({ ...error, password: false, confirm: false })}
      />
      <CusTextField
        label="비밀번호확인"
        name="confirm"
        type="password"
        onChange={_onChange}
        isErr={error.confirm}
        onFocus={() => setError({ ...error, password: false, confirm: false })}
      />
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
