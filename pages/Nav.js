import React, { useState, useEffect } from "react";
import Post from "./Post";
import CusBottomNav from "../components/common/CusBottomNav";
import Explore from "./Explore";
import Notice from "./Notice";

import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading } from "../modules/loading";
import { setWindowSize } from "../modules/size";

const Nav = () => {
  const size = useSelector((state) => state.size);
  const dispatch = useDispatch();
  const [view, setView] = useState(<Post />);
  const setWindow = () => {
    dispatch(setWindowSize(window.innerWidth, window.innerHeight));
  };
  const changeView = async (viewName) => {
    let resultView = "";
    switch (viewName) {
      case "Home":
        resultView = <Post />;
        break;
      case "Search":
        resultView = <Explore />;
        break;
      case "Add":
        const token = localStorage.getItem("token");
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ branch: "Add", token })
        );
        resultView = <Post />;
        break;
      case "Notice":
        resultView = <Notice />;
        break;
      case "Profile":
        resultView = <Profile />;
        break;
      default:
        resultView = <Post />;
        break;
    }
    await setView(resultView);
    dispatch(hideLoading());
  };
  useEffect(() => {
    setWindow();
    dispatch(hideLoading());
  }, []);
  useEffect(() => {
    window.addEventListener("resize", setWindow);
    return () => window.removeEventListener("resize", setWindow);
  }, [size]);
  useEffect(() => {
    window.addEventListener("scroll", refreshHandler);
    return () => window.removeEventListener("scroll", refreshHandler);
  }, []);
  const refreshHandler = (e) => {
    const { scrollTop } = e.target.documentElement;
    window.ReactNativeWebView &&
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ branch: "Refresh", refresh: scrollTop === 0 })
      );
  };
  return (
    <div>
      {view}
      <CusBottomNav changeView={changeView} />
    </div>
  );
};

export default Nav;
