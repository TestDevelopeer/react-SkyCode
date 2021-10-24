import React, {useEffect, useRef} from 'react';
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