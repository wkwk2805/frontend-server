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
            key={i}
            addFriend
            content={e.content}
            files={e.files}
            author={e.author}
            likes={e.likes}
            shares={e.shares}
            comments={e.comments}
            mine={e.mine}
            post_id={e._id}
            getPosts={getPosts}
          />
        ))}
      </div>
    </>
  );
};

export default Post;
