import React from "react";

const ButtonUpDown = ({link, text, icon, classes = ''}) => {
    return (
        <div className={"saas_btn " + classes}>
            <a href={link}><i className={icon}/> {text}</a>
        </div>
    );
}

export default ButtonUpDown;