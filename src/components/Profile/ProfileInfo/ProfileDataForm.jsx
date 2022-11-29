import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControls";
import {reduxForm} from "redux-form";
import p from "./ProfileInfo.module.css";
import style from "../../common/FormsControl/FormsControls.module.scss";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>Full Name</b>:{createField("Full name","fullName",[],Input)}
        </div>
        <div>
            <b>Looking for a job</b>:{createField("","lookingForAJob",[],Input,{type:"checkbox"})}
        </div>

            <div>
                <b>My professional skills</b>:{createField("My professional skills","lookingForAJobDescription",[],Textarea)}
            </div>

        <div>
            <b>About Me</b>:{createField("About Me","aboutMe",[],Textarea)}
        </div>


        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={p.contact}>
                <b>{key}: {createField(key,"contacts." +key,[],Input)}</b>

            </div>
            })}
        </div>


    </form>
}
const ProfileDataFormReduxForm = reduxForm({form:'edit-profile', enableReinitialize: true, destroyOnUnmount: false})(ProfileDataForm)
export default ProfileDataFormReduxForm;
