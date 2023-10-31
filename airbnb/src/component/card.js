import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img-div">
                <img src={`images/${props.item.img}`} className="card--img round-img" alt="Loading" />
                <div className="card--state-div">
                    <p className="card--state--text">
                        {props.item.isOnline ? 'ONLINE' : 'SOLD OUT'}
                    </p>
                </div>
            </div>
            <div className="first-row">
                <div className="red-star item">
                    <span>&#9733;</span>
                </div>
                <p className="card--rate item">{props.item.rate}</p>
                <p className="card--numOfRate item">({props.item.numOfRate})</p>
                <p className="card--dot item">•</p>
                <p className="card--country item">{props.item.country}</p>
            </div>
            <div className="secound-row">
                <p className="card--title">Life lessons with Katie Zaferes</p>
            </div>
            <div className="third-row">
                <h2 className="card--price">From ${props.item.price}</h2>
                <h2 className="card--price--person">/ person</h2>
            </div>
        </div>
    )
} 