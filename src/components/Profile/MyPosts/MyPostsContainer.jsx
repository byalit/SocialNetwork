import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
      pageAddPost: () => {
          dispatch(addPostActionCreator())
      },
        updateNewPostText: (text) => {
          dispatch(onPostChangeActionCreator(text))
        }
    }
}
let  MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts)
export default MyPostsContainer;
