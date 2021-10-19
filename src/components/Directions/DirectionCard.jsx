import React from "react";

const DirectionCard = (props) => {
    const {mainText, altText, desc, btnText, btnIcon, btnLink} = props.cardInfo;
    return (
        <div className="eight-feature-box text-center position-relative">
            <div className="feature-icon8 position-relative">
                <i className="fas fa-file-code"/>
                <span className="ei-icon-bg"/>
            </div>
            <div className="feature-text8 appeight-headline pera-content">
                <h3>{mainText}</h3>
                <h4>{altText}</h4>
                <p>{desc}</p>
            </div>
            <div className="ei-feature-more">
                <a href={btnLink}><i className={btnIcon}/> {btnText}</a>
            </div>
        </div>
    );
}

export default DirectionCard;