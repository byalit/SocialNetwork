import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {
  return (
    <div>
      Posts
      <div>New posts</div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default Myposts;
