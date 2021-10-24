import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Link} from "react-router-dom";

const LinkMore = ({text, link, classes, type = 'anchor'}) => {
    return (
        <div className={"service_read_more " + classes}>
            {type === 'anchor'
                ? <AnchorLink href={link}>{text} </AnchorLink>
                : <Link to={link}>{text} </Link>
            }
        </div>
    );
}

export default LinkMore;