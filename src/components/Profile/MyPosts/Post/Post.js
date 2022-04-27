import React from "react";
import p from "./Post.module.css";

const Post = (props) => {

  return <div className={p.item}> {props.message}</div>;
};
export default Post;
