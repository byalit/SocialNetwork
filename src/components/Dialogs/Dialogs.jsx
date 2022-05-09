import React from "react";
import s from "./Dialogs.module.css";
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>username1</div>
        <div className={s.dialog}>username2</div>
        <div className={s.dialog}>username3</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}></div>
        <div className={s.message}></div>
        <div className={s.message}></div>
      </div>
    </div>
  );
};
export default Dialogs;
