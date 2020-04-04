import React from "react";
import Friend from "../components/friend/Friend";
import BackTop from "../components/friend/BackTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideLoading } from "../modules/loading";

const FriendList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, []);
  return (
    <>
      <BackTop text="친구" />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </>
  );
};

export default FriendList;
