import React from "react";
import Title from "../Elements/Title/Title";
import DirectionCard from "./DirectionCard";
import {compose} from "redux";
import {connect} from "react-redux";

const Directions = (props) => {
    const {title, cardInfo} = props.directionsInfo;
    return (
        <section id="saas_two_feature" className="integration_section feature-eight-section position-relative">
            <div className="container">
                <Title mainText={title.mainText} altText={title.altText} classes='text-center'/>
                <div className="eight-feature-content">
                    <div className="row justify-content-md-center">
                        {cardInfo.map((value, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <DirectionCard cardInfo={value}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    directionsInfo: state.directionReducer
});

export default compose(connect(mapStateToProps))(Directions);