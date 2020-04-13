import React, { useEffect, useState } from "react";
import CusTopNav from "../components/post/CusTopNav";
import Content from "./Content";
import { useSelector } from "react-redux";

const Post = () => {
  const instance = useSelector((s) => s.instance);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => await getPosts())();
  }, []);
  const getPosts = async () => {
    const { data } = await instance.post("/post");
    setPosts(data);
  };
  return (
    <>
      <CusTopNav />
      <div>
        {posts.map((e, i) => (
          <Content
            content={e.content}
            key={i}
            files={e.files}
            author={e.author}
            likes={e.likes}
            shares={e.shares}
            comments={e.comments}
            addFriend
            mine={e.mine}
          />
        ))}
      </div>
    </>
  );
};

export default Post;
