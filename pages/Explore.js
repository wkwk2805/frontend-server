import React from "react";
import ExploreTop from "../components/explore/ExploreTop";
import ExploreBody from "../components/explore/ExploreBody";

const tileData = [
  {
    img: "/images/sample2.jpg",
    cols: 2,
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
    cols: 2,
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
    cols: 3,
    type: "video"
  }
];

const Explore = () => {
  return (
    <>
      <ExploreTop />
      <ExploreBody tileData={tileData} />
    </>
  );
};

export default Explore;
