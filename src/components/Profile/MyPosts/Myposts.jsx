import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {
    let posts = [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:1, message: 'It\'s my first post', likesCount: 11}
    ]
    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
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
                {postsElements}
            </div>
        </div>
    );
};
export default Myposts;
