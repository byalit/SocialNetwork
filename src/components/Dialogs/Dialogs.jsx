import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'enter your message'} name={"newMessageBody"} component={"textarea"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm);

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    if (!props.isAuth) return <Navigate to={"/login"}/>

    const onSubmit = (formData) => {
        props.onSendMessageClick(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};
export default Dialogs;
