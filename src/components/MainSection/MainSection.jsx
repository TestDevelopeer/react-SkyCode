import React, {useEffect} from "react";
import ButtonUpDown from "../Elements/Buttons/ButtonUpDown";
import bLaptop from '../../assets/img/banner/b-laptop.png';
import bShapeup from '../../assets/img/shape/b-shapeup.png';
import bShapemiddle from '../../assets/img/shape/b-shapemiddle.png';
import {compose} from "redux";
import {connect} from "react-redux";
import initHeadline from '../../assets/js/typer-new';

const MainSection = (props) => {
    let {mainText, directions, altText, centerText} = props.mainInfo;
    useEffect(() => {
        initHeadline();
    }, []);
    return (
        <section id="eight-banner" className="eight-banner-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="eight-banner-content">
                            <div className="banner-content-box appeight-headline pera-content">
                                <span className="s2-tilte_tag main-title-text"><h2>{centerText}</h2></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row banner-img">
                    <div className="col-lg-6">
                        <div className="eight-banner-content">
                            <div className="banner-content-box appeight-headline pera-content">
                                <h1 className="cd-headline clip is-full-width">
                                    {mainText} <br/>
                                    <span className="cd-words-wrapper">
                                        {directions.map((value, index) => {
                                            return <b key={'directions_' + index} className={index === 0 ? 'is-visible' : 'is-hidden'}>{value.text}</b>
                                        })}
                                    </span>
                                </h1>
                                {altText.map((value, index) => {
                                    return <span key={'altText_' + index}><p>{value}</p><br/></span>
                                })}
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
                    <img src={bLaptop} alt=""/>
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

const mapStateToProps = (state) => ({
    mainInfo: state.mainReducer
});

export default compose(connect(mapStateToProps))(MainSection);