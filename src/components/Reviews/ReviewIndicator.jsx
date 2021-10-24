import React from "react";

const ReviewIndicator = (props) => {
    const {target, slideTo, avatar} = props.reviewIndicators;
    return (
        <li data-target={target} data-slide-to={slideTo} className={props.classes}>
            <img src={process.env.REACT_APP_BASENAME + avatar} alt=""/>
        </li>
    );
}

export default ReviewIndicator;