import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  const open = useSelector(state => state.loading);
  return (
    <div>
      <Backdrop
        style={{
          zIndex: 3,
          color: "#fff"
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loading;
