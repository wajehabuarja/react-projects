import React from "react";
import logo from "../images/airbnb 1.png";
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-2">
            <img src={logo} className="navbar-brand nav--logo"></img>
        </nav>
    )
}