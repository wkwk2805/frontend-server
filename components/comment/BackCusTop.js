import React, { useEffect } from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { KeyboardBackspace, Edit, Delete } from "@material-ui/icons";
import { useRouter } from "next/router";
import { showLoading, hideLoading } from "../../modules/loading";
import { useDispatch } from "react-redux";

const BackCusTop = ({ text, edit }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(hideLoading());
  }, []);
  const back = () => {
    dispatch(showLoading());
    router.back();
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          style={{ backgroundColor: "rgb(15, 76, 129)", paddingLeft: 0 }}
          variant="dense"
        >
          <IconButton style={{ color: "white" }} onClick={back}>
            <KeyboardBackspace />
          </IconButton>
          <Typography component="div">{text}</Typography>
          {edit && (
            <div style={{ position: "absolute", right: 10 }}>
              <IconButton style={{ color: "white", padding: 3 }}>
                <Edit />
              </IconButton>
              <IconButton style={{ color: "white", padding: 3 }}>
                <Delete />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default BackCusTop;
