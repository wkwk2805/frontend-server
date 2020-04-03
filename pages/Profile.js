import React, { useEffect } from "react";
import CusTop from "../components/common/CusTop";
import { Avatar, Typography, IconButton } from "@material-ui/core";
import ExploreBody from "../components/explore/ExploreBody";
import { Edit } from "@material-ui/icons";
const tileData = [
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "picture"
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video"
  }
];
const Profile = ({ win }) => {
  return (
    <div style={{ margin: 5 }}>
      <CusTop text="프로필" />
      <div>
        <IconButton style={{ position: "absolute", right: 10, padding: 5 }}>
          <Edit fontSize="small" />
        </IconButton>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar style={{ width: 60, height: 60 }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Typography variant="button" component="div" style={{ margin: 5 }}>
            아이디(이름)
          </Typography>
          <Typography variant="caption" component="div" style={{ margin: 5 }}>
            상태메세지
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant="button">게시물 15</Typography>
        <ExploreBody tileData={tileData} />
      </div>
    </div>
  );
};

export default Profile;
