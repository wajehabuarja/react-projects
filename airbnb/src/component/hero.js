import React from "react";
import cover from '../images/Group 77.png'

export default function MainContent() {
    return (
        <div className="hero">
            <img src={cover} className="cover-img"></img>
            <div className="hero-content">
                <h1 className="title left-content">Online Experiences</h1>
                <p className="left-content">Join unique interactive activities led by <br/>one-of-a-kind hosts—all without leaving <br/>home.</p>
            </div>
        </div>
    )
}