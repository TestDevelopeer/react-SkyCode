import React from 'react';
import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import gif from '../../../assets/img/directions/scratch.gif';
import DirectionButtonBlock from "./DirectionButtonBlock";

const DirectionFrontend = (props) => {
    return (
        <section id="str-about" className="str-about-section position-relative">
            <div className="str-aboutbg1 position-absolute"><img src="/img/startup/shape/vs1.png" alt=""/></div>
            <div className="str-aboutbg2 position-absolute"><img src="/img/startup/shape/vs2.png" alt=""/></div>
            <div className="str-aboutbg3 position-absolute"><img src="/img/startup/shape/vs3.png" alt=""/></div>
            <div className="container">
                <div className="str-about-content">
                    <div className="str-section-title text-left str-title-left str-headline">
                        <h2>
                            <span className="str-title-tag">Подробнее о</span>
                            <span className="str-title-h">Frontend</span>
                        </h2>
                        <ButtonUpDown type={'url'} text={'Scratch'} icon={'fas fa-file-code'} link={props.directionInfo[0].btnLink}/>
                        <div className='ml-4'>
                            <ButtonUpDown type={'url'} text={'Python'} icon={'fab fa-python'} link={props.directionInfo[2].btnLink}/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-12">
                            <div className="str-about-text">
                                <span className="s2-tilte_tag direction-age">10-16 лет</span>
                                <div className="str-about-textarea">
                                    Если ребенок мечтает пойти по пути Марка Цукерберга (основатель Facebook) и создать собственную социальную сеть,
                                    тогда ему отлично подойдет именно это направление. Тут он научится создавать современные сайты и работать с
                                    графическими редакторами с помощью HTML & CSS & JavaScript.
                                </div>
                                <div className="str-about-textarea">
                                    Как проходит обучение:
                                </div>
                                <div className="str-about-details">
                                    Обучение проходит в комфортных условиях для ребенка, с индивидуально подобранным преподавателем, который поддержит
                                    и поможет с возникающими вопросами.
                                </div>
                                <div className="str-about-textarea">
                                    Формат обучения:
                                </div>
                                <div className="str-about-details">
                                    E-learning-обучение с помощью интернета и мультимедиа. Продолжительность урока — 50 минут на площадке zoom. <br/>
                                    Это не просто теория: курс разработан специально для подростков, и включает в себя 90% практики в лучшей профессии 21 века.
                                </div>
                                <div className="str-about-textarea">
                                    Ребенок после прохождения курса:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>Знает HTML & CSS & JavaScript;</li>
                                        <li>Имеет навыки работы с графическими редакторами Figma и PhotoShop;</li>
                                        <li>Имеет сертификат о прохождении курса;</li>
                                        <li>Имеет более 15 готовых проектов для своего портфолио.</li>
                                    </ul>
                                </div>
                                <div className="str-about-textarea">
                                    Умеет:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>Писать код и создавать сайты с помощью HTML & CSS;</li>
                                        <li>Работать с языком программирования JavaScript;</li>
                                        <li>Работать с графическими редакторами Figma и PhotoShop.</li>
                                    </ul>
                                </div>
                                <DirectionButtonBlock history={props.history} text={'Записаться'} icon={'fas fa-user-plus'} link={"#ei-newslatter"}/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="str-about-img position-relative d-flex justify-content-center">
                                <img className={'direction-resource'} src={gif} alt={'scratch'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DirectionFrontend;