import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

const Footer = (props) => {
    return (
        <section className="ei-footer-copyright">
            <div className="container">
                <div className="ei-footer-copyright-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ei-copyright-text">
                                <p>Copyright © 2020 <a href="/">{props.title}.</a> All Rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    title: state.headerReducer.textLogo
});

export default compose(connect(mapStateToProps))(Footer);