import ButtonUpDown from "../../Elements/Buttons/ButtonUpDown";
import React from "react";

const DirectionButtonBlock = (props) => {
    return (
        <div className="d-flex pb-5 pt-5 direction-buttons">
            <ButtonUpDown text={'Назад'} icon={'fas fa-arrow-left'}
                          callbacks={{onClick: () => props.history.push('/#saas_two_feature')}}/>
            <div className='ml-4'>
                <ButtonUpDown text={props.text} icon={props.icon} link={props.link}/>
            </div>
        </div>
    );
}

export default DirectionButtonBlock;