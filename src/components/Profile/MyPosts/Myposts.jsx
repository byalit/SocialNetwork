import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../redux/state";
import p from "./Myposts.module.css";
import Post from "./Post/Post";



const Myposts = (props) => {

    let postsElements = props
.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
const newPostElement = React.createRef()
const pageAddPost = () => {
    // const text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
    // props.updateNewPostText('')
};
const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text))
};
    return (
        <div className={p.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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
