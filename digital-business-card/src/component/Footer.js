import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-icon-div">
                <button className="footer-icon-btn"><a href="https://twitter.com/wajeh_abuarja"><i class="fa-brands fa-square-twitter footer-icon"></i></a></button>
                <button className="footer-icon-btn"><a href="https://web.facebook.com/wajeh.abuarja.10/"><i class="fa-brands fa-square-facebook footer-icon"></i></a></button>
                <button className="footer-icon-btn"><a href="https://www.instagram.com/wajeh_abuarja/"><i class="fa-brands fa-square-instagram footer-icon"></i></a></button>
                <button className="footer-icon-btn"><a href="https://www.linkedin.com/in/wajeh-abuarja/"><i class="fa-brands fa-linkedin footer-icon"></i></a></button>
                <button className="footer-icon-btn"><a href="https://github.com/wajehabuarja"><i class="fa-brands fa-square-github footer-icon"></i></a></button>
            </div>
        </div>
    )
}