import React, {useEffect, useState} from "react";
import p from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";


const ProfileStatusH = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    let activateEditMode = () =>{
        setEditMode(true)
    }
    let deactivateEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status)
    }
    let onStatusChange = (e)=>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}
                           />
                </div>}
        </div>
    );
}
export default ProfileStatusH;
