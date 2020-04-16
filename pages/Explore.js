import React, { useState, useEffect } from "react";
import ExploreTop from "../components/explore/ExploreTop";
import ExploreBody from "../components/explore/ExploreBody";
import { host } from "../../WebviewServer/host";

const tileData = [
  {
    img: "/images/sample2.jpg",
    cols: 2,
    type: "video",
  },
  {
    img: "/images/sample2.jpg",
    cols: 2,
    type: "picture",
  },
  {
    img: "/images/sample2.jpg",
    cols: 1,
    type: "video",
  },
  {
    img: "/images/sample2.jpg",
    cols: 2,
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
    cols: 3,
    type: "video",
  },
];

const Explore = () => {
  const [data, setData] = useState();
  return (
    <>
      <ExploreTop setData={setData} />
      <ExploreBody
        tileData={
          data
            ? data.map((e) => ({
                img: host() + ":3001/" + e.files[0].path,
                cols: 1,
                type: /image/gi.test(e.files[0].mimetype) ? "picture" : "video",
              }))
            : []
        }
      />
    </>
  );
};

export default Explore;
