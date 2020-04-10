import React, { useState, useEffect } from "react";
import Login from "./Login";
import Nav from "./Nav";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { axiosInit } from "../modules/instance";
import { hostName } from "../common/Util";

const Index = () => {
  const dispatch = useDispatch();
  const [autoLogin, setAutoLogin] = useState(false);
  // headers-token 설정
  useEffect(() => {
    const token = localStorage.getItem("token");
    const axios = Axios.create({
      baseURL: hostName(),
      headers: { token: token },
    });
    dispatch(axiosInit(axios));
    (async () => {
      await autoLoginSetting(axios, token);
    })();
  }, []);
  // 자동로그인 설정
  const autoLoginSetting = async (axios, token) => {
    if (token) {
      const { data } = await axios.post("/auth/verify", { init: true });
      if (data.success) {
        setAutoLogin(true);
      } else {
        alert(data.message);
        setAutoLogin(false);
      }
    }
  };

  return autoLogin ? <Nav /> : <Login />;
};

export default Index;
