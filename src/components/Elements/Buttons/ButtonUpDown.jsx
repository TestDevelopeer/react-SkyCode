import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ButtonUpDown = ({link = '', text, icon = '', classes = '', callbacks = null}) => {
    const iconElem = icon !== '' ? <i className={icon}/> : '';
    return (
        <div className={"saas_btn " + classes}>
            {link !== ''
                ? <AnchorLink className={'saas_btn-link'} href={link} {...callbacks}>{iconElem} {text}</AnchorLink>
                : <button className={'saas_btn-link'} {...callbacks}>{iconElem} {text}</button>
            }
        </div>
    );
}

export default ButtonUpDown;