import React from "react";
import { Avatar, Typography, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import { useSelector } from "react-redux";

const CusComment = ({ id, user, comment, image, getPosts, likes }) => {
  const instance = useSelector((s) => s.instance);
  const userInfo = useSelector((s) => s.user);
  const likeComment = async () => {
    const { data } = await instance.put("/comment/like", { comment_id: id });
    if (data.success) {
      await getPosts();
    }
  };
  return (
    <>
      <Avatar
        aria-label="user"
        style={{
          backgroundColor: red[500],
          width: 20,
          height: 20,
          float: "left",
          marginRight: 5,
        }}
        src={image}
      />
      <span style={{ verticalAlign: "super" }}>
        <Typography variant="caption" color="textSecondary" component="span">
          {user}
        </Typography>
        {`  `}
        <Typography variant="caption" color="textSecondary" component="span">
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
          onClick={likeComment}
        >
          {likes.filter((e) => e.user === userInfo._id).length > 0 ? (
            <Favorite fontSize="small" />
          ) : (
            <FavoriteBorder fontSize="small" />
          )}
        </IconButton>
      </div>
    </>
  );
};

export default CusComment;
