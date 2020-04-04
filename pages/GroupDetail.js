import React, { useEffect } from "react";
import Group from "../components/group/Group";
import GroupUesr from "../components/group/GroupUesr";
import BackCusTop from "../components/comment/BackCusTop";
import ExploreBody from "../components/explore/ExploreBody";
import { Typography } from "@material-ui/core";
import { hideLoading } from "../modules/loading";
import { useDispatch } from "react-redux";

const tileData = [
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video",
  },
];
const GroupDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, []);
  return (
    <div>
      <BackCusTop text="그룹" />
      <Group />
      <div style={{ overflow: "auto", display: "flex", marginBottom: 10 }}>
        <GroupUesr name="wkwk2805u1234" position="매니저" />
        <GroupUesr name="wkwk2805u1234" position="매니저" />
        <GroupUesr name="wkwk2805u1234" position="매니저" />
      </div>
      <div>
        <Typography variant="body1" style={{ marginBottom: 10 }}>
          게시물 15
        </Typography>
        <ExploreBody tileData={tileData} />
      </div>
    </div>
  );
};

export default GroupDetail;
