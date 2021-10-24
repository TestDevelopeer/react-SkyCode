import React from 'react';
import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import gif from '../../../assets/img/directions/scratch.gif';

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
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-9 col-12">
                            <div className="str-about-img position-relative d-flex justify-content-center">
                                <img className={'direction-resource'} src={gif} alt={'scratch'} />
                                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/u_pnia4Xhlw" title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-9 col-12">
                            <div className="str-about-text">
                                <div className="str-about-textarea">
                                    Если ребенок мечтает пойти по пути Марка Цукенберга и создать собственную социальную сеть, то тогда ему именно на
                                    это направление. Тут он научится создавать современные сайт и работать с графическими редакторами.
                                </div>
                                <span className="s2-tilte_tag direction-age">10-16 лет</span>
                                <div className="str-about-textarea">
                                    Данное направление поможет изучить три кита front-end разработки HTML, CSS, Javascript.
                                </div>
                                <div className="str-about-details">
                                    В ходе обучения ребенок научится:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>создавать статичные сайты с помощью HTML & CSS;</li>
                                        <li>работать с языком программирования JavaScript и с его помощью оживлять сайты;</li>
                                        <li>базовым навыкам работы с графическими редакторами Figma и PhotoShop;</li>
                                        <li>использовать программы для разработки, которыми пользуются реальные программисты.</li>
                                    </ul>
                                </div>
                                <div className="str-about-details">
                                    Завершив курс, ученик будет иметь:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>использовать современные методы создания сайтов;</li>
                                        <li>навыки работы с языком программирования JavaScript;</li>
                                        <li>полное понимание профессии front-end developer;</li>
                                        <li>более 15 готовых проектов;</li>
                                        <li>сертификат по окончании обучения.</li>
                                    </ul>
                                </div>
                                <div className="d-flex pb-5 direction-buttons">
                                    <ButtonUpDown text={'Назад'} icon={'fas fa-arrow-left'} callbacks={{onClick: props.history.goBack}}/>
                                    <div className='ml-4'>
                                        <ButtonUpDown text={'Записаться'} icon={'fas fa-user-plus'} link={"#ei-newslatter"}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default DirectionFrontend;