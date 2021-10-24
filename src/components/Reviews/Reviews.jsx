import React from "react";
import ReviewItem from "./ReviewItem";
import ReviewIndicator from "./ReviewIndicator";
import Title from "../Elements/Title/Title";
import {compose} from "redux";
import {connect} from "react-redux";

const Reviews = (props) => {
    const {reviewItems, reviewIndicators, title} = props.reviewInfo;
    return (
        <section ref={props.reF} id="saas_two_team" className="testimonial_section">
            <div className="container">
                <div className="section_title text-center">
                    <Title mainText={title.mainText} altText={title.altText} classes='text-center'/>
                </div>
                <div className="testimonial_slider">
                    <div id="testimonial_slide" className="carousel slide" data-ride="carousel">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="testimonial_indicator relative-position">
                                    <ol className="carousel-indicators">
                                        {reviewIndicators.map((value, index) => {
                                            return <ReviewIndicator key={`indicator_${index}`} reviewIndicators={value} classes={index === 0 ? 'active' : ''} />
                                        })}
                                    </ol>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="carousel_preview">
                                    <div className="carousel-inner relative-position">
                                        {reviewItems.map((value, index) => {
                                            return <ReviewItem key={`item_${index}`} reviewItems={value} classes={index === 0 ? 'active' : ''} />
                                        })}
                                    </div>
                                    <a className="carousel-control-prev" href="#testimonial_slide" role="button" data-slide="prev"/>
                                    <a className="carousel-control-next" href="#testimonial_slide" role="button" data-slide="next"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    reviewInfo: state.reviewReducer
});

export default compose(connect(mapStateToProps))(Reviews);