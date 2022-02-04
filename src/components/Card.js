import React from "react";
// import ImgStar from "../img/star1.png"
export default function Card(props) {
    return (
        <div className="card">
            <img src={process.env.PUBLIC_URL + props.coverImg} className="card--image"/>  
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL + "/img/star1.png"} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}