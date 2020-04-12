import React from "react";
import { CardMedia } from "@material-ui/core";
import Slider from "react-slick";
import { hostName } from "../../common/Util";
const CusImages = ({ files }) => {
  const settings = {
    infinite: false,
  };
  return (
    <Slider
      {...settings}
      style={{
        paddingTop: "3%", // 16:9,
        backgroundColor: "black",
      }}
    >
      {files.map((e) => (
        <div>
          {/* <CardMedia
            image={hostName() + "/" + e.path}
            title="Sample"
            style={{
              height: 0,
              paddingTop: "70%", // 16:9,
            }}
            component="img"
          /> */}
          <img
            src={hostName() + "/" + e.path}
            width="100%"
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
