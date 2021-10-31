import React from "react";

const ReviewItem = (props) => {
    const {text, cntStars, avatar, user, direction, list} = props.reviewItems;
    let stars = [];
    for (let i = 0; i < cntStars; i++) {
        stars.push(<li key={`reviewStar_${i}`}><i className="fas fa-star"/></li>);
    }
    return (
        <div className={"carousel-item " + props.classes}>
            <div className="testimonial_content">
                <div className="testimonial_text relative-position pera-content">
                    {text.map((value, index) => {
                        return <p key={'review_text_' + index}>{value}</p>
                    })}
                    {list ?
                        <>
                            <p>{list.text}</p>
                            <ul>
                                {list.listText.map((value, index) => {
                                    return <li key={'listText_' + index}>{value}</li>
                                })}
                            </ul>
                        </>
                        : null
                    }
                    <div className="testimonial_rating ul-li">
                        <ul>{stars}</ul>
                    </div>
                </div>
                <div className="qoute_mark relative-position"/>
                <div className="testimonial_name_designation">
                    <div className="testimonial_img float-left">
                        <img src={process.env.REACT_APP_BASENAME + avatar} alt="отзывы SKY-ACADEMY | отзывы школа программирования SKY ACADEMY"/>
                    </div>
                    <div className="testimonial_meta saas-modern-headline pera-content">
                        <h4>{user}</h4>
                        <p>{direction}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;