import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { showLoading } from "../../modules/loading";

const CusAnchor = ({ text, href }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const _onClick = () => {
    dispatch(showLoading());
    router.push(href);
  };
  return (
    <a style={{ cursor: "pointer" }} onClick={_onClick}>
      {text}
    </a>
  );
};

export default CusAnchor;
