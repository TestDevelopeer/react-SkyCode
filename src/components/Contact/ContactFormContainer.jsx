import {createField, Input} from "../FormsControl/FormsControls";
import {isEmail, required} from "../../utils/validator";
import {reduxForm} from "redux-form";
import React from "react";
import ButtonUpDown from "../Elements/Buttons/ButtonUpDown";

const ContactFormContainer = ({invalid, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12">
                    {createField([required], Input,
                        {
                            placeholder: 'Ваше имя',
                            name: 'name',
                            type: 'text',
                            autoComplete: 'on',
                            required: ''
                        })}
                </div>
                <div className="col-lg-6 col-12">
                    {createField([required, isEmail], Input,
                        {
                            placeholder: 'Ваш Email',
                            name: 'email',
                            type: 'email',
                            autoComplete: 'on',
                            required: ''
                        })}
                </div>
                <div className="col-lg-6 col-12">
                    {createField([required], Input,
                        {
                            placeholder: 'Ваш номер телефона',
                            name: 'phone',
                            type: 'text',
                            autoComplete: 'on',
                            required: ''
                        })}
                </div>
            </div>
            <div className="sa-contact-inner-btn text-center">
                <button className="formButton">
                <div className="saas_btn">
                    <ButtonUpDown text="Отправить" icon='fas fa-paper-plane' link='#' />
                </div>
                </button>
            </div>
        </form>
    );
}

const ContactReduxForm = reduxForm({form: 'contact'})(ContactFormContainer);

export default ContactReduxForm;