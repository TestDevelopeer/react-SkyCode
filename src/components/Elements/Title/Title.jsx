import React from "react";

const Title = ({mainText, altText, classes}) => {
    return (
        <div className={"section_title " + classes}>
            <h2>{mainText}</h2>
            {altText !== '' ? <p>{altText}</p> : null }
        </div>
    );
}

export default Title;