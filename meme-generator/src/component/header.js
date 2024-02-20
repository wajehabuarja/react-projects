import React, { useState } from "react";
import meme from "../images/memeimg.png"
import memeData from "../memeData";

export default function Header() {
    const [imgURL, setImgURL] = useState('');
    function getTheMeme() {
        const memeArray = memeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        const newImgURL = memeArray[randomIndex].url;
        setImgURL(newImgURL);
    }
    return (
        <div className="header">
            <div className="header-input-div">
                <input type="text" className="form-control header-imput" placeholder="Top Text" />
                <input type="text" className="form-control header-imput" placeholder="Bottom Text" />
            </div>
            <button className="btns generate-button mt-3" type="button" onClick={getTheMeme}>Get a new meme image  🖼</button>
            <div className="meme-txt-div">
                <div className="text-over top-center mt-4">SHUT UP</div>
                <img src={imgURL || meme} className="img-meme mt-4" />
                <div className="text-over bottom-center mt-4">AND TAKE MY MONEY</div>
            </div>
        </div >
    )
}