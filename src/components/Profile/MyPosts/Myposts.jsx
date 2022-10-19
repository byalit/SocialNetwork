import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'enter your message'} name={"newPostText"} component={"textarea"}/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}
const PostsReduxForm = reduxForm({
    form: 'posts'
})(MyPostForm)
const Myposts = (props) => {

    let postsElements = props
        .posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const onSubmit=(formData)=>{
        props.pageAddPost(formData.newPostText);
    }
    return (
        <div className={p.postsBlock}>
            <h3>Posts</h3>
            <div>
                <PostsReduxForm onSubmit={onSubmit}/> </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default Myposts;
