import React from "react";
import ButtonUpDown from "../Elements/Buttons/ButtonUpDown";
import bLaptop from '../../assets/img/banner/b-laptop.png';
import bShapeup from '../../assets/img/shape/b-shapeup.png';
import bShapemiddle from '../../assets/img/shape/b-shapemiddle.png';

const MainSection = (props) => {
    let {mainText, directions, altText} = props.mainInfo;
    return (
        <section id="eight-banner" className="eight-banner-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="eight-banner-content">
                            <div className="banner-content-box appeight-headline pera-content">
                                <h1 className="cd-headline clip is-full-width">
                                    {mainText} <br/>
                                    <span className="cd-words-wrapper">
                                        {directions.map((value, index) => {
                                            return <b key={index} className={index === 0 ? 'is-visible' : 'is-hidden'}>{value.text}</b>
                                        })}
                                    </span>
                                </h1>
                                <p>{altText}</p>
                                <ButtonUpDown link='#ei-newslatter' icon='fas fa-clipboard-list' text='Начни сейчас'
                                              classes='saas_btn_white ei-banner-btn'/>
                                <div className="ei-banner-review pera-content ul-li">
                                    <ul>
                                        <li><i className="fas fa-star"/></li>
                                        <li><i className="fas fa-star"/></li>
                                        <li><i className="fas fa-star"/></li>
                                        <li><i className="fas fa-star"/></li>
                                        <li><i className="fas fa-star"/></li>
                                    </ul>
                                    <p>(основано на отзывах пользователей)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-img" style={{zIndex: 10}}>
                        <img src={bLaptop} alt=""/>
                    </div>
                </div>
            </div>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={{backgroundImage: `url(${bShapeup})`}}/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={{backgroundImage: `url(${bShapemiddle})`}}/>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={{backgroundImage: `url(${bShapemiddle})`}}/>
                </div>
            </div>
        </section>
    );
}

export default MainSection;