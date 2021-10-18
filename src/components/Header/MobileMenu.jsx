const MobileMenu = (props) => {
    let {textLogo, menuLinks} = props.headerInfo;
    return (
        <div className="s2-mobile_menu relative-position">
            <div className="s2-mobile_menu_button s2-open_mobile_menu">
                <i className="fas fa-bars"/>
            </div>
            <div className="s2-mobile_menu_wrap">
                <div className="mobile_menu_overlay s2-open_mobile_menu"/>
                <div className="s2-mobile_menu_content">
                    <div className="s2-mobile_menu_close s2-open_mobile_menu">
                        <i className="far fa-times-circle"/>
                    </div>
                    <div className="m-brand-logo text-center">
                        <a href="/" className="textLogo">{textLogo}</a>
                    </div>
                    <nav className="s2-mobile-main-navigation  clearfix ul-li">
                        <ul id="m-main-nav" className="navbar-nav text-capitalize clearfix">
                            {menuLinks.map((value, index) => {
                                return <li key={index}><a className="nav-link" href={value.link}>{value.text}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;