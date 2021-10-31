import React, {useEffect} from 'react';
import MainSection from "../MainSection/MainSection";
import Directions from "../Directions/Directions";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Advertising from "../Elements/Advertising/Advertising";
import CountUp from "../countUp/CountUp";
import Helmet from "react-helmet";

const Landing = (props) => {
    useEffect(() => {
        const hash = props.history.location.hash
        const el = hash && document.getElementById(hash.substr(1));
        if (el) {
            el.scrollIntoView();
        }
    }, [props.history.location.hash]);

    useEffect(() => {
        props.history.push('/');
    }, []);
    return (
        <>
            <Helmet>
                <meta name="description"
                      content=" Детская онлайн-школа программирования для ребят 8 - 16 лет. Учим делать игры, сайты, мобильные приложения. Roblox Studio. Курсы программирования для детей онлайн"/>
                <title>Детская онлайн-школа программирования SKY-ACADEMY | IT академия SKY-ACADEMY</title>
            </Helmet>
            <Advertising/>
            <div className="animate__animated animate__fadeInLeft">
                <MainSection/>
                <CountUp/>
                <Directions/>
                <Reviews/>
                <Benefits/>
                <Faq/>
                <Contact/>
            </div>
        </>
    );
}

const LandingContainer = compose(withRouter)(Landing);

export default LandingContainer;