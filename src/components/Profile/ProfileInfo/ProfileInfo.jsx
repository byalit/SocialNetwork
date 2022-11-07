import React from "react";
import p from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusH from "./ProfileStatusH";


const ProfileInfo = ({profile, status,updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={p.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <p>{profile.aboutMe}</p>
                <p>{profile.fullName}</p>

                <ProfileStatusH status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    );
};
export default ProfileInfo;
