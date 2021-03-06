import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import {
  FavoriteBorder,
  Share,
  ChatBubbleOutline,
  ArrowDropDown,
  Add,
  Favorite,
} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import MenuIcon from "../components/post/MenuIcon";
import CusComment from "../components/post/CusComment";
import CusImages from "../components/post/CusImages";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading } from "../modules/loading";

const Content = (props) => {
  const userInfo = useSelector((s) => s.user);
  const [comment, setComment] = useState("");
  const instance = useSelector((s) => s.instance);
  const [content, setContent] = useState({ icon: true, string: "" });
  useEffect(() => {
    let con = props.content;
    if (con) {
      if (con.length > 30) {
        setContent({ icon: true, string: con.substring(0, 30) + "..." });
      } else {
        setContent({ icon: false, string: con });
      }
    }
  }, []);
  const dispatch = useDispatch();
  const router = useRouter();
  const moveComment = async () => {
    dispatch(showLoading());
    router.push(
      {
        pathname: "/Comments",
        query: { post_id: props.post_id },
      },
      "/Comments"
    );
  };
  const addComment = async () => {
    const { data } = await instance.put("/comment", {
      content: comment,
      post_id: props.post_id,
    });
    if (data.success) {
      props.getPosts();
      setComment("");
    }
  };
  const likePost = async () => {
    const { data } = await instance.put("/post/like", {
      post_id: props.post_id,
    });
    if (data.success) {
      props.getPosts();
    }
  };
  return (
    <Card style={{ marginTop: 5 }}>
      <div>
        <CardHeader
          style={{
            paddingBottom: 5,
            width: "39%",
            float: "left",
            paddingRight: 0,
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              style={{
                backgroundColor: red[500],
                width: 25,
                height: 25,
              }}
            >
              R
            </Avatar>
          }
          title={props.author && props.author.id}
          titleTypographyProps={{
            style: {
              fontSize: 13,
            },
          }}
        />
        <Button
          style={{
            display: "inline-block",
            marginTop: 19,
            marginLeft: 3,
            padding: 0,
            fontSize: 11,
            color: "rgb(15, 76, 129)",
          }}
          disabled={props.addFriend}
        >
          {!props.addFriend && "친구추가"}
        </Button>
        <div
          style={{
            display: "inline-block",
            margin: 12,
            padding: 4,
            fontSize: 11,
            float: "right",
            backgroundColor: "#d5d5d5",
            borderRadius: 15,
            color: "white",
          }}
        >
          1/10
        </div>
      </div>
      <CusImages files={props.files} />
      <div>
        <CardActions
          disableSpacing
          style={{ padding: 0, width: "70%", display: "inline-block" }}
        >
          <IconButton
            aria-label="like"
            style={{ paddingRight: 0, paddingLeft: 15 }}
            onClick={likePost}
          >
            {props.likes &&
            props.likes.filter((e) => e.user._id === userInfo._id).length >
              0 ? (
              <Favorite />
            ) : (
              <FavoriteBorder />
            )}
            <Typography variant="caption" style={{ marginLeft: 4 }}>
              {props.likes ? props.likes.length : 0}
            </Typography>
          </IconButton>
          <IconButton
            aria-label="comment"
            style={{ paddingRight: 0, paddingLeft: 15 }}
            onClick={moveComment}
          >
            <ChatBubbleOutline />
            <Typography variant="caption" style={{ marginLeft: 4 }}>
              {props.comments ? props.comments.length : 0}
            </Typography>
          </IconButton>
          <IconButton
            aria-label="share"
            style={{ paddingRight: 0, paddingLeft: 15 }}
          >
            <Share />
            <Typography variant="caption" style={{ marginLeft: 4 }}>
              {props.shares ? props.shares.length : 0}
            </Typography>
          </IconButton>
        </CardActions>
        {props.mine && <MenuIcon />}
      </div>
      <CardContent style={{ paddingTop: 0, paddingBottom: 10 }}>
        <Typography variant="caption" color="textSecondary" component="p">
          {content.string}
          {content.icon && (
            <IconButton
              onClick={() => setContent({ icon: false, string: props.content })}
              style={{ padding: 0 }}
            >
              <ArrowDropDown style={{ verticalAlign: "middle" }} />
            </IconButton>
          )}
        </Typography>
        <div style={{ marginTop: 10 }}>
          {props.comments && props.comments.length > 0 && (
            <>
              <CusComment
                likes={props.comments[0].likes}
                id={props.comments[0]._id}
                user={props.comments[0].author.id}
                comment={props.comments[0].content}
                getPosts={props.getPosts}
              />
              {props.comments.length > 1 && (
                <Typography
                  variant="overline"
                  color="textSecondary"
                  component="p"
                >
                  댓글{props.comments.length}개
                  <IconButton style={{ padding: 0 }} onClick={moveComment}>
                    <ArrowDropDown />
                  </IconButton>
                </Typography>
              )}
            </>
          )}
        </div>

        <div style={{ marginTop: 5 }}>
          <Avatar
            aria-label="user"
            style={{
              backgroundColor: red[500],
              width: 20,
              height: 20,
              float: "left",
              marginRight: 5,
            }}
          />
          <span style={{ verticalAlign: "super" }}>
            <InputBase
              placeholder="댓글을 입력하세요"
              style={{
                fontSize: 12,
                padding: 2,
                verticalAlign: "bottom",
                width: "80%",
              }}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <IconButton
              style={{
                verticalAlign: "baseline",
                padding: 0,
                display: "inline-block",
                float: "right",
              }}
              onClick={addComment}
            >
              <Add />
            </IconButton>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
export default Content;
