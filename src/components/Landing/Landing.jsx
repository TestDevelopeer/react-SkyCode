import React from 'react';
import Preloader from "../Preloader/Preloader";
import Up from "../Up/Up";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";

const Landing = () => {
    const state = {
        headerInfo: {
            textLogo: 'SKYCODE',
            menuLinks: [
                {
                    text: 'Главная',
                    link: '#eight-banner'
                }, {
                    text: 'Направления',
                    link: '#saas_two_feature'
                }, {
                    text: 'Отзывы',
                    link: '#saas_two_team'
                }, {
                    text: 'Плюсы',
                    link: '#saas_two_feature1'
                }, {
                    text: 'FAQ',
                    link: '#ei-faq'
                }, {
                    text: 'Контакты',
                    link: '#ei-newslatter'
                }
            ]
        },
        mainInfo: {
            mainText: 'Ваш гид в направлении',
            directions: [
                {
                    text: 'Scratch',
                },{
                    text: 'Frontend',
                },{
                    text: 'Python',
                }
            ],
            altText: 'Объясняем простыми словами сложные вещи'
        }
    };
    return (
        <>
            <Preloader/>
            <Up/>
            <Header headerInfo={state.headerInfo}/>
            <div id="fullpage" className="animate__animated animate__fadeInDown">
                <MainSection mainInfo={state.mainInfo}/>
            </div>
        </>
    );
}

export default Landing;