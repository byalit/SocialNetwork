import React from "react";
import p from "./ProfileInfo.module.css";


const ProfileInfo = () => {
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
            <div className='p.descriptionBlock'>ava + discription</div>

        </div>
    );
};
export default ProfileInfo;
