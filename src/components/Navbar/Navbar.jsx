import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to="/profile" className={(navigationData) => navigationData.isActive ? n.activeLink : "" }>Profile</NavLink>
            </div><div className={n.item}>
                <NavLink to="/users" className={(navigationData) => navigationData.isActive ? n.activeLink : "" }>Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/dialogs" className={(navigationData) => navigationData.isActive ? n.activeLink : "" }>Messages</NavLink>
            </div>
            <div className={n.item}>

                <NavLink to="/photo" className={(navigationData) => navigationData.isActive ? n.activeLink : "" }>Photo</NavLink>
            </div>
            <div className={n.item}>

                <NavLink to="/music" className={(navigationData) => navigationData.isActive ? n.activeLink : "" }>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/news" className={(navigationData) => navigationData.isActive ? n.activeLink : "" }>News</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
