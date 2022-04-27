import React from "react";
import p from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdnicewallpapers.com%2FWalls%2FBig%2FVehicles%2FCycle_in_Farm_HD_Image.jpg&f=1&nofb=1"></img>
      </div>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fduck%2Fduck_PNG5036.png&f=1&nofb=1"></img>
      </div>
      <div>ava + discription</div>
      <div>
        My posts
        <div>New posts</div>
      </div>
      <div className={p.posts}>
        <div className={p.item}> Post 1</div>
        <div className={p.item}> Post 2</div>
        <div className={p.item}> Post 3</div>
      </div>
    </div>
  );
};
export default Profile;
