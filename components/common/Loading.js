import React, { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ isShow }) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);
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
