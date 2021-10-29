import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = (props) => {
    const {icons, contacts} = props.footerInfo;
    return (
        <section id="dia-footer" className="dia-footer-section position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="dia-footer-widget pera-content dia-headline clearfix">
                            <div className="dia-footer-logo">
                                <p>Первая детская IT-академия</p>
                                <div className="brand_logo"><a href="/" className="textLogo white-logo">{props.title}</a></div>
                            </div>
                            <div className="dia-footer-social">
                                {icons.map((value, index) => {
                                    return <a rel="noreferrer" key={'footerIcon_' + index} href={value.link} target={'_blank'}><i className={value.text}/></a>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="dia-footer-widget dia-headline ul-li-block clearfix">
                            <h3 className="dia-widget-title">Карта сайта</h3>
                            <ul>
                                {props.siteMap.map((value, index) => {
                                    return <li key={'siteMap_' + index}>
                                        <AnchorLink href={value.link}>{value.text}</AnchorLink>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="dia-footer-widget dia-headline ul-li-block clearfix">
                            <h3 className="dia-widget-title">Направления</h3>
                            <ul>
                                {props.directions.map((value, index) => {
                                    return <li key={'directionFooter_' + index}>
                                        <Link to={value.btnLink}>{value.mainText}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="dia-footer-widget dia-headline  ul-li-block clearfix">
                            <h3 className="dia-widget-title">Контакты</h3>
                            <ul className='footerContact'>
                                {contacts.map((value, index) => {
                                    return <li key={'contactFooter_' + index}>
                                        <i className={value.icon}/>
                                        <a target="_top" href={value.link}>{value.text}</a>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    title: state.headerReducer.textLogo,
    siteMap: state.headerReducer.menuLinks,
    directions: state.directionReducer.cardInfo,
    footerInfo: state.footerReducer
});

export default compose(connect(mapStateToProps))(Footer);