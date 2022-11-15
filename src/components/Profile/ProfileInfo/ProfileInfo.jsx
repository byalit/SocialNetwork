import React, {useState} from "react";
import p from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusH from "./ProfileStatusH";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit =(formData) => {
  saveProfile(formData).then(
      ()=>{
          setEditMode(false);
      })
    }
    return (
        <div>
            <div className={p.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt=""/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>:
                    <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    toEditMode={()=>{setEditMode(true)}}/>}

                <ProfileStatusH status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    );
};
const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={toEditMode}>Edit</button></div>}
        <div>
            <b>Full Name</b>:{profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'YES' : 'NO'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>:{profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About Me</b>:{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={p.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
export default ProfileInfo;
