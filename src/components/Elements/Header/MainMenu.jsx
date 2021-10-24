import ButtonUpDown from "../Buttons/ButtonUpDown";
import React from "react";
import {Link} from "react-router-dom";

const MainMenu = (props) => {
    let {textLogo, menuLinks} = props.headerInfo;
    return (
        <div className="s_main_menu">
            <div className="row">
                <div className="col-12 col-lg-2 d-flex align-items-center">
                    <div className="brand_logo">
                        <a href="/" className="textLogo">{textLogo}</a>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="main_menu_list clearfix float-right">
                        <nav className="s2-main-navigation clearfix ul-li">
                            <ul id="main-nav" className="navbar-nav text-capitalize clearfix">
                                {menuLinks.map((value, index) => {
                                    return <li key={index}>
                                        <Link className={'nav-link'} to={'/'+value.link}>{value.text}</Link>
                                    </li>
                                })}
                            </ul>
                        </nav>
                        <ButtonUpDown link={"#ei-newslatter"} text={'Записаться'} icon={"fas fa-user-plus"} classes='saas_sign_up_btn needHide'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;