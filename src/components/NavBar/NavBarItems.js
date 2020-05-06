import React from "react";
import { NavLink } from "react-router-dom";


const NavBarItems = ({classItem}) => {

    return (
        <ul>
            <li className={classItem}><NavLink exact to="/">Strona główna</NavLink></li>
            <li className={classItem}><NavLink to="/o-nas">O nas</NavLink></li>
            <li className={classItem}><NavLink to="/wsparcie">Wsparcie</NavLink></li>
            <li className={classItem}><NavLink to="/kontakt">Kontakt</NavLink></li>
        </ul>
    )
}

export default NavBarItems;