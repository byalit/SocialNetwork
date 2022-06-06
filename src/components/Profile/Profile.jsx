import React from "react";
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>

            <Myposts posts ={props.state.posts}  newPostText={props.state.newPostText} dispatch={props.dispatch} />

        </div>
    );
};
export default Profile;
