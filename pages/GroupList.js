import React, { useEffect } from "react";
import BackTop from "../components/friend/BackTop";
import Group from "../components/group/Group";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../modules/loading";
const GropuList = () => {
  const router = useRouter();
  const moveGroupDetail = () => {
    dispatch(showLoading());
    router.push("/GroupDetail");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, []);
  return (
    <>
      <BackTop text="그룹" />
      <Group _onClick={moveGroupDetail} />
    </>
  );
};

export default GropuList;
