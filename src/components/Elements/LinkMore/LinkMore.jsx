import React from "react";

const LinkMore = ({text, link, classes}) => {
    return (
        <div className={"service_read_more " + classes}>
            <a href={link}>{text} </a>
        </div>
    );
}

export default LinkMore;