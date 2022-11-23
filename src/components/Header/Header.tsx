import React from "react";
import h from "./Header.module.scss";
import {NavLink} from "react-router-dom";
type PropsType ={
    isAuth:boolean
    login:any
    logout:any
}
const Header: React.FC<PropsType> = (props) => {
  return (
    <header className={h.header}>
        <div className={h.loginBlock}>
          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
};
export default Header;
