import React from "react";
import BackTop from "../components/friend/BackTop";
import Group from "../components/group/Group";
import { useRouter } from "next/router";
const GropuList = () => {
  const router = useRouter();
  const moveGroupDetail = () => {
    router.push("/GroupDetail");
  };
  return (
    <>
      <BackTop text="그룹" />
      <Group _onClick={moveGroupDetail} />
    </>
  );
};

export default GropuList;
