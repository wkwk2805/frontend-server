import React from "react";
import { CardMedia } from "@material-ui/core";
import Slider from "react-slick";
import { host } from "../../../WebviewServer/host";
const CusImages = ({ files }) => {
  const settings = {
    infinite: false,
  };
  return (
    <Slider
      {...settings}
      style={{
        marginTop: 10,
        paddingTop: "3%", // 16:9,
        backgroundColor: "black",
      }}
    >
      {files.map((e) => (
        <div>
          <img
            src={host() + "/" + e.path}
            width="100%"
            height="300"
            style={{ backgroundColor: "black" }}
          ></img>
        </div>
      ))}
      {/* <div>
        <CardMedia
          style={{
            height: 0,
            paddingTop: "70%", // 16:9,
          }}
          image="/images/sample2.jpg"
          title="Sample"
        />
      </div> */}
    </Slider>
  );
};

export default CusImages;
