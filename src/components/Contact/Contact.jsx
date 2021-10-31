import React from "react";
import Title from "../Elements/Title/Title";
import {connect} from "react-redux";
import ContactReduxForm from "./ContactFormContainer";
import eimap from "../../assets/img/shape/eimap.png";

const Contact = () => {
    const onSubmit = (formData) => {
        console.log('submit');
    }
    return (
        <section id="ei-newslatter" className="ei-newslatter-section position-relative">
            <div className="ei-newslatter-box position-relative ei-newslatter-box_clear">
                <div className="container">
                    <Title mainText='Оставь свои данные для связи с нами!' classes='text-center'/>
                    <div className="sa-contact-inner-form">
                        <ContactReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
            <div className="ei-footer-shape3 position-absolute"><img src={eimap} alt="курсы веб дизайна для детей | Roblox Studio|Python| айти школа Киев| айти школа Украина | Scratch | Скретч для детей | индивидуальные уроки"/></div>
        </section>
    );
}

export default connect()(Contact);