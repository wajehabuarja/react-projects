import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="img-nav" />
                <ul className="nav-items">
                    <li>pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}