import React from "react";
import mylogo from "../images/react-logo.png";

export default function NavBar() {
    return (
        <header>
            <nav className="nav">
                <img src={mylogo} alt="react-logo" className="nav--icon"/>
                <h3 className="nav--logo_text">ReactFacts</h3> 
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}