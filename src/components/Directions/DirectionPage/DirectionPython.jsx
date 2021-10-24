import React from 'react';
import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import gif from '../../../assets/img/directions/scratch.gif';

const DirectionPython = (props) => {
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
                            <span className="str-title-h">Python</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="str-about-img position-relative d-flex justify-content-center">
                                <img className={'direction-resource'} src={gif} alt={'scratch'} />
                                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/u_pnia4Xhlw" title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="str-about-text">
                                <div className="str-about-textarea">
                                    Для тех, кто хочет познакомиться с одним из самых популярных языков программирования в мире и уже на первом уроке
                                    создать свою полноценную программу, даже не имея опыта.
                                </div>
                                <span className="s2-tilte_tag direction-age">12-16 лет</span>
                                <div className="str-about-textarea">
                                    В данном направлении ребенок погрузиться в разработку на Python, где он научится создавать консольные программы,
                                    а также программы с графическим интерфейсом, захватывающие 2-d игры и наполнит свои статичные сайты полезным
                                    функционалом.
                                </div>
                                <div className="str-about-details">
                                    В ходе обучения ребенок научится:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>создавать консольные программы;</li>
                                        <li>работать с библиотекой tkinter, с помощью которой создаст программы с графическим интерфейсом от
                                            калькулятора до голосового помощника;
                                        </li>
                                        <li>создавать 2-d игры используя библиотеку pygame;</li>
                                        <li>создавать серверную часть сайтов и создаст настоящие живые сайты от личного блога до интернет-магазина с
                                            помощью фреймворка Django;
                                        </li>
                                        <li>использовать программы для разработки, которыми пользуются реальные программисты.</li>
                                    </ul>
                                </div>
                                <div className="str-about-details">
                                    Завершив курс, ученик будет иметь:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>навыки работы с одним их самых популярных языков программирования Python;</li>
                                        <li>знания для создания программ с графическим интерфейсом;</li>
                                        <li>полное понимание профессии back-end developer;</li>
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

                    </div>
                </div>
            </div>
        </section>
    );
}

export default DirectionPython;