import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {

    let postsElements = props
.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
const newPostElement = React.createRef()
const pageAddPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value='';
}
    return (
        <div className={p.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={pageAddPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default Myposts;
