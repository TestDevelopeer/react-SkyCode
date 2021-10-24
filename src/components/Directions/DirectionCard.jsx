import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LinkMore from "../Elements/LinkMore/LinkMore";

const DirectionCard = (props) => {
    const {mainText, altText, desc, btnText, btnIcon, btnLink, icon} = props.cardInfo;
    return (
        <div className="eight-feature-box text-center position-relative">
            <div className="feature-icon8 position-relative">
                <i className={icon}/>
                <span className="ei-icon-bg"/>
            </div>
            <div className="feature-text8 appeight-headline pera-content">
                <h3>{mainText}</h3>
                <h4>{altText}</h4>
                <p>{desc}</p>
            </div>
            <LinkMore type='link' link={btnLink} text='Подробнее' classes='text-center read-more_card' />
            <div className="ei-feature-more">
                <AnchorLink href="#ei-newslatter"><i className={btnIcon}/> {btnText}</AnchorLink>
            </div>
        </div>
    );
}

export default DirectionCard;