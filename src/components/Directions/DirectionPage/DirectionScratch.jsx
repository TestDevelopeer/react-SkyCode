import React from 'react';
import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import gif from '../../../assets/img/directions/scratch.gif';

const DirectionScratch = (props) => {
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
                            <span className="str-title-h">Scratch</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="str-about-text">
                                <div className="str-about-textarea">
                                    Scratch – это визуальная среда программирования, в которой ученик создавая игры научится алгоритмическому
                                    мышлению, изучит базовые концепции языков программирования, что позволит отвлечь ребенка от бесцельного сидения за
                                    компьютером, а направить его энергию в полезное русло.
                                </div>
                                <span className="s2-tilte_tag direction-age">8-12 лет</span>
                                <div className="str-about-textarea">
                                    Если у ребенка нет опыта, то этот курс для него.
                                </div>
                                <div className="str-about-details">
                                    В ходе обучения ребенок научится:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>с легкостью решать сложные задачи и находить несколько вариантов их решений;</li>
                                        <li>использовать компьютер не только как средство развлечения, но и как рабочий инструмент;</li>
                                        <li>самостоятельно реализовывать собственную креативность для создания уникальных проектов.</li>
                                    </ul>
                                </div>
                                <div className="str-about-details">
                                    Завершив курс, ученик будет иметь:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>навыки работы с: переменными, условиями, циклами, функциями, работой со звуком и
                                            анимацией;
                                        </li>
                                        <li>более 20 готовых проектов;</li>
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
                        <div className="col-lg-6 col-12">
                            <div className="str-about-img position-relative d-flex justify-content-center">
                                <img className={'direction-resource'} src={gif} alt={'scratch'} />
                                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/u_pnia4Xhlw" title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DirectionScratch;