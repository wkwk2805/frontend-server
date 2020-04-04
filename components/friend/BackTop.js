import React, { useEffect } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  InputBase,
} from "@material-ui/core";
import { KeyboardBackspace, SearchOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";
import { showLoading, hideLoading } from "../../modules/loading";
import { useDispatch } from "react-redux";

const BackTop = ({ text }) => {
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
          <Typography component="div">{text}목록</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
      <Paper square variant="outlined" style={{ marginBottom: 5 }}>
        <InputBase
          placeholder={`${text}찾기`}
          style={{
            fontSize: 13,
            marginLeft: 10,
            width: "80%",
          }}
        />
        <IconButton
          style={{
            padding: 0,
            float: "right",
            marginTop: 4,
            marginRight: 10,
          }}
        >
          <SearchOutlined fontSize="small" />
        </IconButton>
      </Paper>
    </>
  );
};

export default BackTop;
