import React from "react";
import p from "./Myposts.module.scss";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'enter your message'} name={"newPostText"} component={Textarea} validate={[required,maxLengthCreator(30)]}/>
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
const Myposts = React.memo (props => {

    let postsElements = props
        .posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
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
});
export default Myposts;
