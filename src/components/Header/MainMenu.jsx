import ButtonUpDown from "../Elements/Buttons/ButtonUpDown";

const MainMenu = (props) => {
    let {textLogo, menuLinks} = props.headerInfo;
    return (
        <div className="s_main_menu">
            <div className="row">
                <div className="col-md-2">
                    <div className="brand_logo">
                        <a href="/" className="textLogo">{textLogo}</a>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="main_menu_list clearfix float-right">
                        <nav className="s2-main-navigation  clearfix ul-li">
                            <ul id="main-nav" className="navbar-nav text-capitalize clearfix">
                                {menuLinks.map((value, index) => {
                                    return <li key={index}><a className="nav-link" href={value.link}>{value.text}</a></li>
                                })}
                            </ul>
                        </nav>
                        <ButtonUpDown link={"#ei-newslatter"} text={'Записаться'} icon={"fas fa-user-plus"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;