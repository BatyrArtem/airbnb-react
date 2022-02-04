import React from "react";
// import ImgArbnb from '../img/airbnb1.png';

export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "/img/airbnb1.png"} className="nav--logo"/>
        </nav>
        
    )
}