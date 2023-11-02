import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Card(props) {
    const handleGoogleClick = () => {
        const locationName = `${props.item.country} ${props.item.title}`;

        const encodedLocation = encodeURIComponent(locationName);

        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

        window.open(googleMapsUrl, '_blank');
    };
    return (
        <>
            <div className="card">
                <img className="card-img" src={props.item.img} />
                <div className="card-text">
                    <div className="card-title">
                        <p className="card-title-logo"><FaMapMarkerAlt /></p>
                        <p className="card-title-country mt-2">{props.item.country}</p>
                        <p className="card-title-google mt-2" onClick={handleGoogleClick}>View on Google Maps</p>
                    </div>
                    <h1 className="card-name">{props.item.title}</h1>
                    <p className="card-date">{props.item.firstDate} - {props.item.secoundDate}</p>
                    <p className="card-desc">{props.item.description}</p>
                </div>
            </div>
            <hr className="card-hr-width" />
        </>
    )
}