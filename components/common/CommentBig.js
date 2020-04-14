import React from "react";
import { Avatar, Typography, IconButton, Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import { useSelector } from "react-redux";

const CommentBig = ({
  id,
  user,
  comment,
  image,
  selectedComment,
  setSelected,
  likeComment,
  likes,
}) => {
  const userInfo = useSelector((s) => s.user);
  const likeCommentBig = (e) => {
    e.stopPropagation();
    likeComment(id);
  };
  return (
    <div
      style={{
        padding: 5,
        backgroundColor: selectedComment === id && "#eeeeee",
      }}
      onClick={() =>
        selectedComment !== id ? setSelected(id, user) : setSelected("")
      }
    >
      <Avatar
        aria-label="user"
        style={{
          backgroundColor: red[500],
          width: 35,
          height: 35,
          float: "left",
          marginRight: 5,
        }}
        src={image}
      />
      <span style={{ verticalAlign: "text-bottom" }}>
        <Typography variant="subtitle2" component="span">
          {user}
        </Typography>
        {`  `}
        <Typography variant="caption" component="span">
          {comment}
        </Typography>
      </span>
      <div
        style={{
          display: "inline-block",
          float: "right",
        }}
      >
        <IconButton
          style={{ verticalAlign: "middle", padding: 5 }}
          onClick={likeCommentBig}
        >
          {likes.filter((e) => e.user === userInfo._id).length > 0 ? (
            <Favorite fontSize="small" />
          ) : (
            <FavoriteBorder fontSize="small" />
          )}
        </IconButton>
      </div>
      <Button
        style={{
          display: "block",
          fontSize: 11,
          padding: 0,
          textAlign: "left",
          minWidth: 0,
        }}
        onClick={() => setSelected(id, user)}
      >
        답글달기
      </Button>
    </div>
  );
};

export default CommentBig;
