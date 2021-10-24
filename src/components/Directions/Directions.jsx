import React, {useEffect} from "react";
import Title from "../Elements/Title/Title";
import DirectionCard from "./DirectionCard";
import {compose} from "redux";
import {connect} from "react-redux";
import BIRDS from 'vanta/dist/vanta.birds.min'

const Directions = (props) => {
    const {title, cardInfo} = props.directionsInfo;
    useEffect(() => {
        BIRDS({
            el: "#saas_two_feature",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color1: 0x2c00ff,
            birdSize: 0.40,
            quantity: 3.00,
            speedLimit: 3.00
        })
    }, []);
    return (
            <section ref={props.reF} id="saas_two_feature" className="integration_section feature-eight-section position-relative">
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