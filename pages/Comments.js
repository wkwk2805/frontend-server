import React from "react";
import CommentBig from "../components/common/CommentBig";
import BackCusTop from "../components/comment/BackCusTop";
const Comments = () => {
  return (
    <div>
      <BackCusTop text="댓글" />
      <div style={{ margin: 5 }}>
        <div className="comment">
          <CommentBig user="유저" comment="댓글을 다는 공간입니다" />
        </div>
        <div
          className="recomment"
          style={{ marginLeft: 5 + 30, marginTop: 10 }}
        >
          <CommentBig user="유저" comment="댓글을 다는 공간입니다" />
        </div>
        <div
          className="recomment2"
          style={{ marginLeft: 5 + 30 * 2, marginTop: 10 }}
        >
          <CommentBig user="유저" comment="댓글을 다는 공간입니다" />
        </div>
        <div
          className="recomment3"
          style={{ marginLeft: 5 + 30 * 3, marginTop: 10 }}
        >
          <CommentBig user="유저" comment="댓글을 다는 공간입니다" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
