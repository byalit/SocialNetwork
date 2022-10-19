import React from "react";
import {addPostActionCreator} from "../../redux/profileReducer";
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
      pageAddPost: (newPostText) => {
          dispatch(addPostActionCreator(newPostText))
      }
    }
}
let  MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts)
export default MyPostsContainer;
