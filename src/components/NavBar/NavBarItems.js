import React from "react";
import { NavLink } from "react-router-dom";


const NavBarItems = () => {

    return (
        <ul>
            <li><NavLink exact to="/">Strona główna</NavLink></li>
            <li><NavLink to="/o-nas">O nas</NavLink></li>
            <li><NavLink to="/wsparcie">Wsparcie</NavLink></li>
            <li><NavLink to="/kontakt">Kontakt</NavLink></li>
        </ul>
    )
}

export default NavBarItems;