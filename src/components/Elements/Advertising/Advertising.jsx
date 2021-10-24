import React, {createRef} from "react";
import ButtonUpDown from "../Buttons/ButtonUpDown";

const Advertising = () => {
    const block = createRef();
    const closeAdd = () => {
        block.current.classList.remove(`animate__delay-5s`);
        block.current.classList.remove(`animate__fadeInRightBig`);
        block.current.classList.add(`animate__fadeOutRightBig`);
    }
    return (
        <div ref={block} className="newslatter_content animate__animated animate__fadeInRightBig animate__delay-5s">
            <button onClick={closeAdd} className='closeAdd'><i className="fas fa-window-close"/></button>
            <div className="newslatter_title  text-center saas-modern-headline pera-content">
                <p>Запишись на пробный урок уже сейчас!</p>
            </div>
            <div className="newslatter-form  relative-position d-flex justify-content-center">
                <ButtonUpDown classes={'saas_btn_white ei-banner-btn animate__animated animate__pulse animate__infinite'}
                              callbacks={{onClick: closeAdd}}
                              data-dismiss="modal" text={'Записаться'}
                              icon={'far fa-thumbs-up'} link={"#ei-newslatter"}/>
            </div>
        </div>
    );
}

export default Advertising;