import React from "react";
import { InputBase, Avatar, Button } from "@material-ui/core";

const CommentInput = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "7px 10px 7px 10px",
        backgroundColor: "rgb(15, 76, 129)"
      }}
    >
      {/* 답글일 경우에만 나오도록 처리 시작*/}
      <div style={{ color: "white", fontSize: 12, marginBottom: 10 }}>
        답글을 쓰는중입니다...
      </div>
      {/* 답글일 경우에만 나오도록 처리 끝*/}
      <div style={{ display: "flex" }}>
        <Avatar style={{ width: 25, height: 25, marginRight: 10 }} />
        <InputBase
          placeholder="댓글달기"
          style={{ fontSize: 12, width: "75%", color: "white" }}
        />
        <Button
          style={{
            fontSize: 13,
            padding: 0,
            position: "absolute",
            right: 10,
            minWidth: 0,
            alignSelf: "center",
            color: "white"
          }}
        >
          게시
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
