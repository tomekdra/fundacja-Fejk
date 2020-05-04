import React from "react";
import {Link} from "react-router-dom";
import NavBarItems from "./NavBarItems";


const NavBar = () => {

    return (
        <div className="head-wrapper">
            <div className="head-menu container">
                <nav className="navBar">
                   <NavBarItems />
                </nav>
                <Link to="/" className="btn-support">Wesprzyj nas</Link>
            </div>
        </div>
    )
}

export default NavBar;