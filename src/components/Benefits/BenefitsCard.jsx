import React from "react";

const BenefitsCard = (props) => {
    const {mainText, altText, icon} = props.benefitsCards;
    return (
        <div className="service_content_box relative-position">
            <div className="service_icon_box relative-position">
                <div className="upper_icon">
                    <i className={icon}/>
                </div>
            </div>
            <div className="service_text_box saas2-headline pera-content">
                <h3>{mainText}</h3>
                <p>{altText}</p>
            </div>
        </div>
    );
}

export default BenefitsCard;