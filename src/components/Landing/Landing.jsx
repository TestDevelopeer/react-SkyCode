import React from 'react';
import Preloader from "../Preloader/Preloader";
import Up from "../Up/Up";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import Directions from "../Directions/Directions";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const Landing = (props) => {
    return (
        <>
            <Preloader/>
            <Up/>
            <Header/>
            <div id="fullpage" className="animate__animated animate__fadeInDown">
                <MainSection/>
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