import React from 'react';
import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import DirectionButtonBlock from "./DirectionButtonBlock";
import Helmet from "react-helmet";

const DirectionPageLink = (props) => {
    const {currDirectionInfo, directionInfo, directionPage} = props;
    return (
        <>
            <Helmet>
                <title>{directionPage.title}</title>
                <meta name={directionPage.meta.name} content={directionPage.meta.content}/>
            </Helmet>
            <section id="str-about" className="str-about-section position-relative">
                <div className="str-aboutbg1 position-absolute">
                    <img src="/img/startup/shape/vs1.png" alt={directionPage.alt}/>
                </div>
                <div className="str-aboutbg2 position-absolute">
                    <img src="/img/startup/shape/vs2.png" alt={directionPage.alt}/>
                </div>
                <div className="str-aboutbg3 position-absolute">
                    <img src="/img/startup/shape/vs3.png" alt={directionPage.alt}/>
                </div>
                <div className="container">
                    <div className="str-about-content">
                        <div className="str-section-title text-left str-title-left str-headline">
                            <h2>
                                <span className="str-title-tag">Подробнее о</span>
                                <span className="str-title-h">{currDirectionInfo.mainText}</span>
                            </h2>
                            <div className="directionLinks">
                                {
                                    directionInfo.map((value, index) => {
                                        if (props.history.location.pathname !== value.btnLink) {
                                            return (
                                                <div className='directionNextLinks' key={index}>
                                                    <ButtonUpDown type={'url'} text={value.mainText} icon={value.icon} link={value.btnLink}/>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="str-about-text">
                                    <span className="s2-tilte_tag direction-age">{currDirectionInfo.altText}</span>
                                    {directionPage.headText.title !== '' ?
                                        <div className="str-about-textarea">
                                            {directionPage.headText.title}
                                        </div>
                                        : null
                                    }
                                    {directionPage.headText.details !== '' ?
                                        <div className="str-about-details">
                                            {directionPage.headText.details}
                                        </div>
                                        : null
                                    }
                                    <div className="str-about-details pt-4">
                                        {currDirectionInfo.desc}
                                    </div>
                                    <div className="str-about-textarea">
                                        Как проходит обучение:
                                    </div>
                                    <div className="str-about-details">
                                        {directionPage.education}
                                    </div>
                                    <div className="str-about-textarea">
                                        Формат обучения:
                                    </div>
                                    <div className="str-about-details">
                                        {directionPage.educationFormat.map((value, index) => {
                                            return (<span key={'format_' + index}>{value} <br/></span>)
                                        })}
                                    </div>
                                    <div className="str-about-textarea">
                                        Ребенок после прохождения курса:
                                    </div>
                                    <div className="str-about-list ul-li-block">
                                        <ul>
                                            {directionPage.educationAfter.map((value, index) => {
                                                return <li key={'after_' + index}>{value}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="str-about-textarea">
                                        Умеет:
                                    </div>
                                    <div className="str-about-list ul-li-block">
                                        <ul>
                                            {directionPage.educationCan.map((value, index) => {
                                                return <li key={'can_' + index}>{value}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <DirectionButtonBlock history={props.history} text={'Записаться'} icon={'fas fa-user-plus'}
                                                          link={"#ei-newslatter"}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="str-about-img position-relative d-flex justify-content-center">
                                    <img className='direction-resource' src={directionPage.img} alt={directionPage.alt}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DirectionPageLink;