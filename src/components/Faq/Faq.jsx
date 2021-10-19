import React from "react";
import Title from "../Elements/Title/Title";
import fqShape2 from '../../assets/img/shape/fq-shape2.png';
import fqShape3 from '../../assets/img/shape/fq-shape3.png';
import fqShape4 from '../../assets/img/shape/fq-shape4.png';
import fqShape5 from '../../assets/img/shape/fq-shape5.png';
import Accordion from "./Accordion/Accordion";
import {compose} from "redux";
import {connect} from "react-redux";

const Faq = (props) => {
    const {title, accordionItems} = props.faqInfo;
    return (
        <section id="ei-faq" className="ei-faq-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ei-faq-content">
                            <div className="ei-title-faq pera-content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Title mainText={title.mainText} altText={title.altText}
                                               classes='eight-section-title appeight-headline pera-content text-center'/>
                                    </div>
                                </div>
                            </div>
                            <Accordion accordionItems={accordionItems} />
                        </div>
                    </div>
                </div>
            </div>
            <span className="ei-faq-shape fq-shape-style2"><img src={fqShape2} alt=""/></span>
            <span className="ei-faq-shape fq-shape-style3"><img src={fqShape3} alt=""/></span>
            <span className="ei-faq-shape fq-shape-style4" data-parallax="{&quot;y&quot; : 60}"><img src={fqShape4} alt=""/></span>
            <span className="ei-faq-shape fq-shape-style5"><img src={fqShape5} alt=""/></span>
        </section>
    );
}

const mapStateToProps = (state) => ({
    faqInfo: state.faqReducer
});

export default compose(connect(mapStateToProps))(Faq);