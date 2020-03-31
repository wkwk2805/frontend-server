import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  TextField,
  InputBase
} from "@material-ui/core";
import {
  FavoriteBorder,
  Share,
  ChatBubbleOutline,
  ArrowDropDown
} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

export default function Post() {
  return (
    <Card style={{ marginTop: 5 }}>
      <CardHeader
        style={{ paddingBottom: 5 }}
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
      />
      <CardMedia
        style={{
          height: 0,
          paddingTop: "70%" // 16:9
        }}
        image="/images/sample.jpg"
        title="Sample"
      />
      <CardActions style={{ paddingBottom: 0 }} disableSpacing>
        <IconButton aria-label="like">
          <FavoriteBorder />
          <Typography variant="subtitle2" style={{ marginLeft: 4 }}>
            30
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutline />
          <Typography variant="subtitle2" style={{ marginLeft: 4 }}>
            30
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
          <Typography variant="subtitle2" style={{ marginLeft: 4 }}>
            30
          </Typography>
        </IconButton>
      </CardActions>
      <CardContent style={{ paddingTop: 0, paddingBottom: 10 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          이곳은 이 사진에 대한 글 등을 쓰는 공간입니다. 적당히 길이가 길어지면
          ...
          <ArrowDropDown style={{ verticalAlign: "middle" }} />
        </Typography>
        <div style={{ marginTop: 10 }}>
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
            <Typography
              variant="caption"
              color="textSecondary"
              component="span"
            >
              아이디(이름)
            </Typography>
            {`  `}
            <Typography
              variant="caption"
              color="textSecondary"
              component="span"
            >
              댓글내용
            </Typography>
          </span>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          댓글10개
          <IconButton style={{ padding: 0 }}>
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
            <Typography
              variant="caption"
              color="textSecondary"
              component="span"
            ></Typography>
            <InputBase
              placeholder="댓글을 입력하세요"
              style={{ fontSize: 12, padding: 2, verticalAlign: "bottom" }}
            />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
