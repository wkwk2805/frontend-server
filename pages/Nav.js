import React, { useState, useEffect } from "react";
import Post from "./Post";
import CusBottomNav from "../components/common/CusBottomNav";
import Explore from "./Explore";
import Head from "next/head";
import Notice from "./Notice";
import Comments from "./Comments";
import Profile from "./Profile";

const Nav = () => {
  const [win, setWin] = useState({});
  const [view, setView] = useState(<Post />);
  const setWindow = () => {
    setWin({
      wid: window.innerWidth,
      hei: window.innerHeight
    });
  };
  const changeView = viewName => {
    let resultView = "";
    switch (viewName) {
      case "Home":
        resultView = <Post win={win} />;
        break;
      case "Search":
        resultView = <Explore win={win} />;
        break;
      case "Add":
        resultView = "어플리케이션만 가능합니다.";
        break;
      case "Notice":
        resultView = <Notice win={win} />;
        break;
      case "Profile":
        resultView = <Profile win={win} />;
        break;
      default:
        resultView = <Post win={win} />;
        break;
    }
    setView(resultView);
  };
  useEffect(() => {
    setWindow();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", setWindow);
    return () => window.removeEventListener("resize", setWindow);
  }, [win]);
  return (
    <div>
      {view}
      <CusBottomNav changeView={changeView} />
    </div>
  );
};

export default Nav;
