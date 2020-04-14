import React, { useEffect, useState } from "react";
import CommentBig from "../components/common/CommentBig";
import BackCusTop from "../components/comment/BackCusTop";
import CommentInput from "../components/comment/CommentInput";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Comments = () => {
  const router = useRouter();
  const instance = useSelector((s) => s.instance);
  const [comments, setComments] = useState([]);
  const userInfo = useSelector((s) => s.user);
  useEffect(() => {
    (async () => {
      await getComments();
    })();
  }, []);
  const getComments = async () => {
    const { post_id } = router.query;
    const { data } = await instance.post("/comment", { post_id: post_id });
    setComments(data);
  };
  const [selectedComment, setSelectedComment] = useState("");
  const [edit, setEdit] = useState(false);
  const setSelected = (id, user) => {
    setEdit(userInfo.id === user);
    setSelectedComment(id);
  };
  const likeComment = async (id) => {
    const { data } = await instance.put("/comment/like", { comment_id: id });
    if (data.success) {
      await getComments();
    }
  };
  return (
    <div style={{ paddng: 0 }}>
      <BackCusTop text="댓글" edit={edit} />
      <div>
        {comments.map((e, i) => (
          <div key={i}>
            <div className="comment">
              <CommentBig
                id={e._id}
                user={e.author.id}
                comment={e.content}
                likes={e.likes}
                selectedComment={selectedComment}
                setSelected={setSelected}
                likeComment={likeComment}
              />
            </div>
            {e.recomments.length > 0 &&
              e.recomments.map((e, i) => (
                <div
                  key={i}
                  className="recomment"
                  style={{ marginLeft: 5 + 30, marginTop: 10 }}
                >
                  <CommentBig
                    id={e._id}
                    user={e.author.id}
                    comment={e.content}
                    likes={e.likes}
                    selectedComment={selectedComment}
                    setSelected={setSelected}
                    likeComment={likeComment}
                  />
                </div>
              ))}
          </div>
        ))}

        {/* <div
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
        </div> */}
      </div>
      <CommentInput
        postId={router.query.post_id}
        selectedComment={selectedComment}
        setSelected={setSelected}
        getComments={getComments}
      />
    </div>
  );
};

export default Comments;
