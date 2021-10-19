import React from "react";

const AccordionItem = (props) => {
    const {question, answer, isShowed, parent} = props.accordionItem;
    return (
        <div className="ei-faq">
            <div className="ei-faq-header" id={`heading_${props.index}`}>
                <button className={isShowed !== true ? 'collapsed' : ''} data-toggle="collapse" data-target={`#collapse_${props.index}`}
                        aria-controls={`collapse_${props.index}`}
                        aria-expanded="false">
                    {question}
                </button>
            </div>
            <div id={`collapse_${props.index}`} className={`collapse ${isShowed === true ? 'show' : ''}`} data-parent={parent}>
                <div className="ei-faq-body">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;