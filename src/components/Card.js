import React from "react";
import ImgStar from "../img/star1.png"
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--img"/>
            <div className="card--stats">
                <img src={ImgStar} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}