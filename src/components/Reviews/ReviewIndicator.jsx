import React from "react";

const ReviewIndicator = (props) => {
    const {target, slideTo, avatar} = props.reviewIndicators;
    return (
        <li data-target={target} data-slide-to={slideTo} className={props.classes}>
            <img src={avatar} alt=""/>
        </li>
    );
}

export default ReviewIndicator;