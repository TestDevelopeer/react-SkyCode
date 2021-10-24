import React from "react";

const PriceCard = (props) => {
    const {cnt, price, icon, cardNumber, cardInfo, cardName} = props.cardInfo;
    return (
        <div className={"aplpg-pricing-column " + props.classes}>
            <div className="aplpg-pricing-top aplpg-headline">
                <h3><i className={icon}/> {price}</h3>
                <span className="aplpg-subtitle">{cnt}</span>
                <span className="aplpg-triangle-shape"/>
            </div>
            <div className="aplpg-pricing-list-content">
                <div className="Wrap">
                    <div className="Base">
                        <div className="Inner-wrap">
                            <h4>{cardName}</h4>
                            <div className='chip-block'>
                                <img className='Chip' src='/img/price/chip.svg' alt='Chip'/>
                            </div>
                            <div className="Card-number">
                                <ul>
                                    {cardNumber.map((value, index) => {
                                        return <li key={'cardNumber_' + index}>{value}</li>
                                    })}
                                </ul>
                            </div>
                            <div className='Name'>
                                <h3>{cardInfo}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceCard;