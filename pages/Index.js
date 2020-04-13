import React, { useState, useEffect } from "react";
import Login from "./Login";
import Nav from "./Nav";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { axiosInit } from "../modules/instance";
import Loading from "../components/common/Loading";
import { hideLoading, showLoading } from "../modules/loading";
import { host } from "../../WebviewServer/host";

const index = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState("");
  // headers-token 설정
  useEffect(() => {
    dispatch(showLoading());
    const token = localStorage.getItem("token");
    console.log(token);
    const axios = Axios.create({
      baseURL: host(),
      headers: { token: token },
    });
    dispatch(axiosInit(axios));
    (async () => {
      await viewSetting(axios, token);
    })();
  }, []);
  // 자동로그인 설정
  const viewSetting = async (axios, token) => {
    if (token) {
      const { data } = await axios.post("/auth/verify", { init: true });
      if (data.success) {
        setView("NAV");
      } else {
        alert(data.message);
        setView("LOGIN");
        localStorage.removeItem("token");
      }
    } else {
      setView("LOGIN");
    }
    dispatch(hideLoading());
  };
  if (view === "LOGIN") {
    return <Login />;
  } else;
  if (view === "NAV") {
    return <Nav />;
  } else {
    return <Loading />;
  }
};
export default index;
