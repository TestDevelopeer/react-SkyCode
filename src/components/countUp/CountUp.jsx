import React from "react";
import CounUpCounter from "./CountUpCounter";
import {compose} from "redux";
import {connect} from "react-redux";
import VisibilitySensor from 'react-visibility-sensor';

const CountUp = (props) => {
    return (
        <VisibilitySensor partialVisibility offset={{bottom: 40}}>
            {({isVisible}) => {
                return (
                    <section id="dia-fun-fact" className="dia-fun-fact-section">
                        <div className="container">
                            <div className="dia-fun-fact-content">
                                <div className="dia-fun-fact-title text-center dia-headline">
                                    <h2>Мы в цифрах</h2>
                                </div>
                                <div className="dia-fun-fact-counter">
                                    <div className="row">
                                        {props.counterInfo.counters.map((value, index) => {
                                            return (
                                                <div key={'counterUp_' + index} className="col-lg-3 col-md-6 col-12 counter-cards">
                                                    <CounUpCounter key={'counter_' + index} counterInfo={value} isVisible={isVisible}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }}
        </VisibilitySensor>
    );
}

const mapStateToProps = (state) => ({
    counterInfo: state.countUpReducer
})

export default compose(connect(mapStateToProps))(CountUp);