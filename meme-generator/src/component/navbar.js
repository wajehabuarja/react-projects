import React from "react";
import TrollFace from "../images/TrollFace.png"

export default function NavBar(){
    return(
        <nav className="nav navbar-expand-lg my-navbar">
            <img src={TrollFace} className="my-navbar-troll-face"/>
            <p className="my-navbar-title">Meme Generator</p>
        </nav>
    )
}