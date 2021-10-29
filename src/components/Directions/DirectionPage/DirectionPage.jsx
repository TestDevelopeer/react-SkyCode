import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import DirectionScratch from "./DirectionScratch";
import DirectionFrontend from "./DirectionFrontend";
import DirectionPython from "./DirectionPython";
import LandingContainer from "../../Landing/Landing";
import { useHistory } from "react-router-dom";
import Contact from "../../Contact/Contact";
import Faq from "../../Faq/Faq";
import {compose} from "redux";
import {connect} from "react-redux";

const DirectionPage = (props) => {
    const history = useHistory();
    const { directionType } = useParams();
    const pages = {
        'scratch': <DirectionScratch directionInfo={props.directionInfo} history={history}/>,
        'frontend': <DirectionFrontend directionInfo={props.directionInfo} history={history}/>,
        'python': <DirectionPython directionInfo={props.directionInfo} history={history}/>
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

const mapStateToProps = (state) => ({
   directionInfo: state.directionReducer.cardInfo
});

export default compose(connect(mapStateToProps))(DirectionPage);