import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { showLoading } from "../../modules/loading";

const CusTop = ({ text }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          style={{ backgroundColor: "rgb(15, 76, 129)" }}
          variant="dense"
        >
          <Typography component="div">{text}</Typography>
          <IconButton
            style={{ right: 0, position: "absolute" }}
            onClick={() => {
              if (!confirm("로그아웃 하시겠습니까?")) return;
              dispatch(showLoading());
              localStorage.removeItem("token");
              router.reload();
            }}
          >
            <ExitToApp fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default CusTop;
