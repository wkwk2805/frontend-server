import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Button } from "@material-ui/core";
import CusTextField from "../components/auth/CusTextField";
import CusAnchor from "../components/common/CusAnchor";
import { showLoading, hideLoading } from "../modules/loading";
import { useRouter } from "next/router";
import axios from "axios";
import { host } from "../../WebviewServer/host";

const Login = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const loginSubmit = async () => {
    if (!isValidation()) {
      return;
    }
    dispatch(showLoading());
    const { data } = await axios.post(`${host()}:3001/auth/login`, userInfo);
    alert(data.message);
    if (data.success) {
      localStorage.setItem("token", data.returnValue);
      router.reload();
    } else {
      dispatch(hideLoading());
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
    }
    return isValidation;
  };
  return (
    <>
      <Container maxWidth="sm">
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <img src="/images/sample.jpg" alt="" width="200" />
        </div>
        <CusTextField
          label="아이디"
          type="id"
          name="id"
          onChange={_onChange}
          isErr={error.id}
          onFocus={() => setError({ ...error, id: false })}
        />
        <CusTextField
          label="비밀번호"
          type="password"
          name="password"
          onChange={_onChange}
          isErr={error.password}
          onFocus={() => setError({ ...error, password: false })}
        />
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
