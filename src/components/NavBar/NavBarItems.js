import React from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

const NavBarItems = ({classItem}) => {

    return (
        <ul>
            <li className={classItem}><NavLink exact to="/">Strona główna</NavLink></li>
            <li className={classItem}><NavLink smooth to="/o-nas#aboutus">O nas</NavLink></li>
            <li className={classItem}><NavLink smooth to="/wsparcie#supportus">Wsparcie</NavLink></li>
            <li className={classItem}><NavLink smooth to="/kontakt#contactus">Kontakt</NavLink></li>
        </ul>
    )
}

export default NavBarItems;