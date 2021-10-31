import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import LandingContainer from "../../Landing/Landing";
import {useHistory} from "react-router-dom";
import Contact from "../../Contact/Contact";
import Faq from "../../Faq/Faq";
import {compose} from "redux";
import {connect} from "react-redux";
import DirectionPageLink from "./DirectionPageLink";

const DirectionPage = (props) => {
    const history = useHistory();
    const {directionType} = useParams();
    const pages = {
        'scratch': <DirectionPageLink currDirectionInfo={props.directionInfo[0]} directionInfo={props.directionInfo}
                                      directionPage={props.pageInfo.scratch} history={history}/>,
        'frontend': <DirectionPageLink currDirectionInfo={props.directionInfo[1]} directionInfo={props.directionInfo}
                                       directionPage={props.pageInfo.frontend} history={history}/>,
        'python': <DirectionPageLink currDirectionInfo={props.directionInfo[2]} directionInfo={props.directionInfo}
                                     directionPage={props.pageInfo.python} history={history}/>,
        'roblox': <DirectionPageLink currDirectionInfo={props.directionInfo[3]} directionInfo={props.directionInfo}
                                     directionPage={props.pageInfo.roblox} history={history}/>
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
    directionInfo: state.directionReducer.cardInfo,
    pageInfo: state.directionReducer.pageInfo
});

export default compose(connect(mapStateToProps))(DirectionPage);