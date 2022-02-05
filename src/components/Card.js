import React from "react";
// import ImgStar from "../img/star1.png"
export default function Card(props) {

    let cardBadge; // переменная для отображения на карте полей sold out и online
    if(props.openSpots === 0) {
        cardBadge = "SOLD OUT";
    } 
    else if (props.location === "Online") {
        cardBadge = "ONLINE"
    }

    return (
        <div className="card">
            {cardBadge && <div className="card--badge">{cardBadge}</div>}  {/* условие отображения если cardbadge существует то выполни div*/}
            <img src={process.env.PUBLIC_URL + props.coverImg} className="card--image"/>  
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL + "/img/star1.png"} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}