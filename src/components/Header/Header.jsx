import React from "react";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import {compose} from "redux";
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <header id="header_main" className="saas_two_main_header">
            <div className="container">
                <MainMenu headerInfo={props.headerInfo}/>
                <MobileMenu headerInfo={props.headerInfo}/>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    headerInfo: state.headerReducer
});

export default compose(connect(mapStateToProps))(Header);