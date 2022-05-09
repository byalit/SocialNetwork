import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div className={p.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                <Post message='Hi, how are you' likesCount='0'/>
                <Post message='Its my first post' likesCount='32'/>
            </div>
        </div>
    );
};
export default Myposts;
