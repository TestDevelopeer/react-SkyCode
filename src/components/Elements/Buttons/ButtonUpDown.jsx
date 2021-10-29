import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Link} from "react-router-dom";

const ButtonUpDown = ({link = '', text, icon = '', classes = '', callbacks = null, type = 'link'}) => {
    const iconElem = icon !== '' ? <i className={icon}/> : '';
    return (
        <div className={"saas_btn " + classes}>
            {type === 'link' ?
                link !== ''
                    ? <AnchorLink className={'saas_btn-link'} href={link} {...callbacks}>{iconElem} {text}</AnchorLink>
                    : <button className={'saas_btn-link'} {...callbacks}>{iconElem} {text}</button>
                : <Link className={'saas_btn-link'} to={link}>{iconElem} {text}</Link>
            }
        </div>
    );
}

export default ButtonUpDown;