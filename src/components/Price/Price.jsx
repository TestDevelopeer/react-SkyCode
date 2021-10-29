import React from "react";
import {Link} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import PriceCard from "./PriceCard";

const Price = (props) => {
    const {priceInfo} = props;
    const {course} = props.match.params;
    if (!priceInfo[course]) {
        props.history.push('/');
    }
    return (
        <>
            <section id="str-about" className="str-about-section position-relative">
                <div className="str-aboutbg1 position-absolute"><img src="/img/startup/shape/vs1.png" alt=""/></div>
                <div className="str-aboutbg2 position-absolute"><img src="/img/startup/shape/vs2.png" alt=""/></div>
                <div className="str-aboutbg3 position-absolute"><img src="/img/startup/shape/vs3.png" alt=""/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                            <div className="aplpg-title-area text-center wow fadeInUp animated"
                                 style={{visibility: "visible", animationName: "fadeInUp"}}>
                                <div className="saas_btn price-home">
                                    <Link to='/#eight-banner'><i className="fas fa-home"/> На главную</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aplpg-pricing-content">
                        <div className="row justify-content-center">
                            {priceInfo[course].map((value, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6">
                                        <PriceCard key={'priceCard' + index} cardInfo={value} classes={index === 1 ? 'popular-package' : ''}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const mapStateToProps = (state) => ({
    priceInfo: state.priceReducer
});

export default compose(connect(mapStateToProps))(Price);