import React from "react";
import { CardMedia } from "@material-ui/core";
import Slider from "react-slick";

const CusImages = () => {
  const settings = {
    infinite: false,
    speed: 500
  };
  return (
    <Slider
      {...settings}
      style={{
        paddingTop: "3%" // 16:9,
      }}
    >
      <div>
        <CardMedia
          image="/images/sample2.jpg"
          title="Sample"
          style={{
            height: 0,
            paddingTop: "70%" // 16:9,
          }}
        />
      </div>
      <div>
        <CardMedia
          style={{
            height: 0,
            paddingTop: "70%" // 16:9,
          }}
          image="/images/sample2.jpg"
          title="Sample"
        />
      </div>
      <div>
        <CardMedia
          style={{
            height: 0,
            paddingTop: "70%" // 16:9,
          }}
          image="/images/sample2.jpg"
          title="Sample"
        />
      </div>
    </Slider>
  );
};

export default CusImages;
