import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to="/profile" activeclassname={n.activeLink}>Profile</NavLink>
            </div><div className={n.item}>
                <NavLink to="/users" activeclassname={n.activeLink}>Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/dialogs" activeclassname={n.activeLink}>Messages</NavLink>
            </div>
            <div className={n.item}>

                <NavLink to="/photo" activeclassname={n.activeLink}>Photo</NavLink>
            </div>
            <div className={n.item}>

                <NavLink to="/music" activeclassname={n.activeLink}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/news" activeclassname={n.activeLink}>News</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
