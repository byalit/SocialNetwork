import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>

    </div>
}
const MessageItem = (props) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='username1' id = '1'/>
                <DialogItem name='username2' id = '2'/>
                <DialogItem name='username3' id = '3'/>

            </div>
            <div className={s.messages}>
                <MessageItem message = 'Hi' />
                <MessageItem message = 'How old are you?' />
                <MessageItem message = 'How are you?' />
                <MessageItem message = 'Nien!' />

            </div>
        </div>
    );
};
export default Dialogs;
