import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  InputBase,
  Button
} from "@material-ui/core";
import {
  FavoriteBorder,
  Share,
  ChatBubbleOutline,
  ArrowDropDown,
  Add
} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import MenuIcon from "../components/post/MenuIcon";
import CusComment from "../components/post/CusComment";
import CusImages from "../components/post/CusImages";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { showLoading } from "../modules/loading";

const Content = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const moveComment = async () => {
    dispatch(showLoading());
    router.push("/Comments");
  };
  return (
    <Card style={{ marginTop: 5 }}>
      <div>
        <CardHeader
          style={{
            paddingBottom: 5,
            width: "39%",
            float: "left",
            paddingRight: 0
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              style={{
                backgroundColor: red[500],
                width: 25,
                height: 25
              }}
            >
              R
            </Avatar>
          }
          title="아이디(이름)"
          titleTypographyProps={{
            style: {
              fontSize: 13
            }
          }}
        />
        <Button
          style={{
            display: "inline-block",
            marginTop: 19,
            marginLeft: 3,
            padding: 0,
            fontSize: 11,
            color: "rgb(15, 76, 129)"
          }}
        >
          친구추가
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
            color: "white"
          }}
        >
          1/10
        </div>
      </div>
      <CusImages />
      <div>
        <CardActions
          disableSpacing
          style={{ padding: 0, width: "70%", display: "inline-block" }}
        >
          <IconButton
            aria-label="like"
            style={{ paddingRight: 0, paddingLeft: 15 }}
          >
            <FavoriteBorder />
            <Typography variant="caption" style={{ marginLeft: 4 }}>
              30
            </Typography>
          </IconButton>
          <IconButton
            aria-label="comment"
            style={{ paddingRight: 0, paddingLeft: 15 }}
          >
            <ChatBubbleOutline />
            <Typography variant="caption" style={{ marginLeft: 4 }}>
              30
            </Typography>
          </IconButton>
          <IconButton
            aria-label="share"
            style={{ paddingRight: 0, paddingLeft: 15 }}
          >
            <Share />
            <Typography variant="caption" style={{ marginLeft: 4 }}>
              30
            </Typography>
          </IconButton>
        </CardActions>
        <MenuIcon />
      </div>
      <CardContent style={{ paddingTop: 0, paddingBottom: 10 }}>
        <Typography variant="caption" color="textSecondary" component="p">
          이곳은 이 사진에 대한 글 등을 쓰는 공간입니다. 적당히 길이가 길어지면
          ...
          <ArrowDropDown style={{ verticalAlign: "middle" }} />
        </Typography>
        <div style={{ marginTop: 10 }}>
          <CusComment user="아이디(이름)" comment="댓글내용입니다..." />
        </div>
        <Typography variant="overline" color="textSecondary" component="p">
          댓글10개
          <IconButton style={{ padding: 0 }} onClick={moveComment}>
            <ArrowDropDown />
          </IconButton>
        </Typography>

        <div style={{ marginTop: 5 }}>
          <Avatar
            aria-label="user"
            style={{
              backgroundColor: red[500],
              width: 20,
              height: 20,
              float: "left",
              marginRight: 5
            }}
          />
          <span style={{ verticalAlign: "super" }}>
            <InputBase
              placeholder="댓글을 입력하세요"
              style={{
                fontSize: 12,
                padding: 2,
                verticalAlign: "bottom",
                width: "80%"
              }}
            />
            <IconButton
              style={{
                verticalAlign: "baseline",
                padding: 0,
                display: "inline-block",
                float: "right"
              }}
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
