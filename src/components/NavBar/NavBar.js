import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = () => {

    return (
        <div className="navBar">
            <nav className="container">
                <ul>
                    <li><NavLink to="/">Strona główna</NavLink></li>
                    <li><NavLink to="/o-nas">O nas</NavLink></li>
                    <li><NavLink to="/wsparcie">Wsparcie</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>

                </ul>
            </nav>
            <a href="#" className="btn-support">Wesprzyj nas</a>
        </div>
    )
}

export default NavBar;