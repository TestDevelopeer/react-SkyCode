import React from "react";
import Title from "../Elements/Title/Title";
import BenefitsCard from "./BenefitsCard";
import LinkMore from "../Elements/LinkMore/LinkMore";
import {compose} from "redux";
import {connect} from "react-redux";

const Benefits = (props) => {
    const {title, benefitsCards} = props.benefitsInfo;
    return (
        <section id="saas_two_feature1" className="saas_two_service_section">
            <div className="container">
                <Title mainText={title.mainText} altText={title.altText} classes='text-center'/>
                <div className="service_content">
                    <div className="row justify-content-md-center">
                        {benefitsCards.map((value, index) => {
                            return (
                                <div key={`benefit_${index}`} className="col-lg-6 col-md-6 col-12">
                                    <BenefitsCard benefitsCards={value}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <LinkMore link="#ei-newslatter" text='Хотите узнать больше?' classes='text-center' />
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    benefitsInfo: state.benefitReducer
});

export default compose(connect(mapStateToProps))(Benefits);