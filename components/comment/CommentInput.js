import React, { useState } from "react";
import { InputBase, Avatar, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const CommentInput = ({
  postId,
  selectedComment,
  setSelected,
  getComments,
}) => {
  const instance = useSelector((s) => s.instance);
  const [comment, setComment] = useState("");
  const addComment = async () => {
    if (selectedComment) {
      const { data } = await instance.put("/comment/recomment", {
        comment_id: selectedComment,
        content: comment,
      });
      if (data.success) {
        await getComments();
        setComment("");
      }
    } else {
      const { data } = await instance.put("/comment", {
        post_id: postId,
        content: comment,
      });
      if (data.success) {
        await getComments();
        setComment("");
      }
    }
  };
  return (
    <>
      <div style={{ marginBottom: 50 + (selectedComment ? 20 : 0) }}></div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "7px 10px 7px 10px",
          backgroundColor: "rgb(15, 76, 129)",
        }}
      >
        {/* 답글일 경우에만 나오도록 처리 시작*/}
        {selectedComment && (
          <div style={{ color: "white", fontSize: 12, marginBottom: 10 }}>
            답글을 쓰는중입니다...
            <Button
              style={{
                fontSize: 13,
                padding: 0,
                position: "absolute",
                minWidth: 0,
                right: 10,
                alignSelf: "center",
                color: "white",
              }}
              onClick={() => setSelected("")}
            >
              닫기
            </Button>
          </div>
        )}
        {/* 답글일 경우에만 나오도록 처리 끝*/}
        <div style={{ display: "flex" }}>
          <Avatar style={{ width: 25, height: 25, marginRight: 10 }} />
          <InputBase
            placeholder={selectedComment ? "답글달기" : "댓글달기"}
            style={{ fontSize: 12, width: "75%", color: "white" }}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            style={{
              fontSize: 13,
              padding: 0,
              position: "absolute",
              right: 10,
              minWidth: 0,
              alignSelf: "center",
              color: "white",
            }}
            onClick={addComment}
          >
            게시
          </Button>
        </div>
      </div>
    </>
  );
};

export default CommentInput;
