import React from 'react';
import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import gif from '../../../assets/img/directions/scratch.gif';
import DirectionButtonBlock from "./DirectionButtonBlock";

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
                        <ButtonUpDown type={'url'} text={'Frontend'} icon={'fab fa-node-js'} link={props.directionInfo[1].btnLink}/>
                        <div className='ml-4'>
                            <ButtonUpDown type={'url'} text={'Python'} icon={'fab fa-python'} link={props.directionInfo[2].btnLink}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="str-about-text">
                                <div className="str-about-textarea">
                                    Scratch — первые шаги в мир высоких технологий.
                                </div>
                                <span className="s2-tilte_tag direction-age">8-12 лет</span>
                                <div className="str-about-textarea">
                                    Обучение на этом курсе подойдет новичкам. Учиться может каждый ребенок!
                                </div>
                                <div className="str-about-details">
                                    Мы позаботились о том, чтобы курс включал в себя все, что поможет ребенку освоить базу и принципы
                                    программирования. Доступный процесс погружения позволяет использовать ребенку компьютер не только как средство
                                    развлечения, но и как рабочий инструмент. На нашем курсе ребята изучают циклы, переменные и другие понятия из баз
                                    учебного программирования, разрабатывая игры. Код в ней складывается из цветных блоков, которые нужно перемещать,
                                    учитывая логику и принципы программы.
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
                                    E-learning-обучение с помощью интернета и мультимедиа. Продолжительность урока — 50 минут на площадке Zoom.
                                </div>
                                <div className="str-about-textarea">
                                    Ребенок после прохождения курса:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>Знает Scratch;</li>
                                        <li>Имеет сертификат о прохождении курса.</li>
                                    </ul>
                                </div>
                                <div className="str-about-textarea">
                                    Умеет:
                                </div>
                                <div className="str-about-list ul-li-block">
                                    <ul>
                                        <li>Работать с переменными, условиями, циклами, функциями, работой со звуком и анимацией;</li>
                                        <li>Анализировать задачи и находить пути решения при помощи блочной среды программирования Scratch;</li>
                                        <li>Применять основы геймдизайна при проектировании игр;</li>
                                        <li>Создавать презентацию и защищать свой проект.</li>
                                    </ul>
                                </div>
                                <DirectionButtonBlock history={props.history} text={'Записаться'} icon={'fas fa-user-plus'} link={"#ei-newslatter"} />
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

export default DirectionScratch;