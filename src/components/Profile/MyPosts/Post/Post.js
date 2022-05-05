import React from "react";
import p from "./Post.module.css";

const Post = (props) => {

  return <div className={p.item}> {props.message}
  <div>
    <span>like</span> {props.likesCount}
  </div>
  </div>
};
export default Post;
