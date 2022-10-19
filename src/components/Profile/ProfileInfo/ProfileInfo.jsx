import React from "react";
import p from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdnicewallpapers.com%2FWalls%2FBig%2FVehicles%2FCycle_in_Farm_HD_Image.jpg&f=1&nofb=1"></img>
            </div>
            <div>
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fduck%2Fduck_PNG5036.png&f=1&nofb=1"></img>
            </div>
            <div className={p.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    );
};
export default ProfileInfo;
