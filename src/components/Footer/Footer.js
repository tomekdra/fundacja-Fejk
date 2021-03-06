import React from "react";
import NavBarItems from "../NavBar/NavBarItems";
import Copyright from "./Copyright";
import {Link} from "react-router-dom";

const Footer = () => {


    return (
        <footer>
            <div className={"container"}>
            <div className="footer-col-numbers">
                <h4>Telefony zaufania:</h4>
                <p><a href="tel:22 654 40 41">22 654 40 41</a> Antydepresyjny Telefon Zaufania (FUNDACJA ITAKA)</p>
                <p><a href="tel:116111">116111</a> Bezpłatny telefon zaufania dla dzieci i Młodzieży</p>
                <p><a href="tel:800 12 12 12">800 12 12 12</a> Bezpłatny telefon zaufania dla dzieci i Młodzieży
                    Rzecznik Praw
                    Dziecka</p>
                <p><a href="tel:800 108 108">800 108 108</a> Bezpłatny telefon zaufania dla osób z żałobie</p>
                <p><a href="tel:800 120 002">800 120 002</a> Niebieska Linia dla ofiar przemocy w rodzinie</p>
                <p><a href="tel:801 199 990">801 199 990</a> Telefon zaufania Narkotyki - Narkomania </p>
                <p><a href="tel:800 100 100">800 100 100</a> Bezpłatny Telefon Zaufania dla rodziców i nauczycieli w
                    sprawie
                    bezpieczeństwa dzieci</p>
            </div>
            <div className="footer-col-menu">
                <div className="menu">
                    <h4>Menu:</h4>
                    <ul className="footer-list">
                        <NavBarItems classItem={"footer-list-item"}/>
                    </ul>
                </div>
            </div>
            <div className="footer-col-contact">
                <h4>Kontakt</h4>
                <p>Fejkfundacja@gmail.com</p>
                <p>Telefon: 536 431 556</p>
                <p>KRS 830036</p>
                <p>NIP: 9542812756</p>
                <p>REGON: 38561517</p>
                <div className="social-icons">
                    <Link to="https://www.facebook.com/depresjaudzieciimlodziezy/" target="_blank"><i className="icon-facebook"></i></Link>
                    <Link to=""><i className="icon-gplus"></i></Link>
                    <Link to=""><i className="icon-twitter"></i></Link>
                </div>
            </div>
        </div>
            <Copyright />
</footer>
)

}

export default Footer;