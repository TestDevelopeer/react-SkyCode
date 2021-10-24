import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import DirectionScratch from "./DirectionScratch";
import DirectionFrontend from "./DirectionFrontend";
import DirectionPython from "./DirectionPython";
import LandingContainer from "../../Landing/Landing";
import { useHistory } from "react-router-dom";
import Contact from "../../Contact/Contact";
import Faq from "../../Faq/Faq";

const DirectionPage = () => {
    const history = useHistory();
    const { directionType } = useParams();
    const pages = {
        'scratch': <DirectionScratch history={history}/>,
        'frontend': <DirectionFrontend history={history}/>,
        'python': <DirectionPython history={history}/>
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="about-page animate__animated animate__fadeInRight">
            {pages[directionType]
                ?
                <>
                    {pages[directionType]}
                    <Contact/>
                    <Faq/>
                </>
                :
                <LandingContainer/>
            }
        </div>
    );
}

export default DirectionPage;