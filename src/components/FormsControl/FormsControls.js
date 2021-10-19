import React from "react";
import {Field} from "redux-form";
import InputMask from 'react-input-mask';

const FormControl = ({input, meta: {touched, error}, children, elem, props}) => {
    const hasError = touched && error;
    return (<>
        <div className={hasError ? 'formError' : ''}>
            {children}
        </div>
    </>);
}

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
}

export const PhoneInputMask = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return (
        <FormControl {...props} props={props}>
            <InputMask {...input} {...restProps} mask="+380(99) 999-99-99" maskChar="_"/>
        </FormControl>
    );
}

export const createField = (validators, component, props = {}, classes) => (
    <div className={classes}>
        <Field
            validate={validators}
            component={component}
            {...props}
        />
    </div>
);