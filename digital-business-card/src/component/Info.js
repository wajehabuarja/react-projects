import React from "react";
import MyImage from "../images/myimage.jpg"
import About from "./About";
import Footer from "./Footer";
import Interests from "./Interests";

export default function Info() {
    const email = 'wajehabuarja1@outlook.com';
    return (
        <div className="main-div">
            <div className="info">
                <img src={MyImage} className="info-img" />
                <h1 className="info-name">Wajeh Abuarja</h1>
                <p className="info-major">Frontend Developer</p>
                <p className="info-website">wajeh.website</p>
                <div className="info-div">
                    <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
                        <button className="info-button">
                            <i class="fa-solid fa-envelope">
                                <a className="info-button-text">Email</a>
                            </i>
                        </button>
                    </a>
                </div>
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}