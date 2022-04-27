import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {
  return (
    <div>
      Posts
        <div>
        <textarea></textarea>
        <button>Add post</button>
        </div>
        <div className={p.posts}>
      <Post message = 'Hi, how are you' />
      <Post message = 'Its my first post' />
    </div>
    </div>
  );
};
export default Myposts;
