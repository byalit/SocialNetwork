import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {
    let dialogs = [
        {id:1,name:'Charlotte'},
        {id:2,name:'Andrew'},
        {id:3,name:'John'},
        {id:4,name:'Hazel'},
        {id:5,name:'Luna'},
        {id:6,name:'Theodore'}
    ]
    let messages = [
        {id:1, message:'Hi'},
        {id:1, message:'How old are you?'},
        {id:1, message:'How are you?'},
        {id:1, message:'Nien!'}

    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    );
};
export default Dialogs;
