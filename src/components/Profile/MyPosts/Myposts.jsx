import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";



const Myposts = (props) => {

    let postsElements = props
.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
const newPostElement = React.createRef()
const onAddPost = () => {
        props.pageAddPost()
};
const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
};
    return (
        <div className={p.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default Myposts;
