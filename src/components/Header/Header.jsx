import React from "react";
import h from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.J2qXDNNag8xxvu51y4nzggHaHa%26pid%3DApi&f=1"></img>
        <div className={h.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
};
export default Header;
