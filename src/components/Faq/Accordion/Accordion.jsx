import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
    return (
        <div className="ei-faq-queans">
            <div className="accordion" id="accordionExample">
                <div className="row">
                    {props.accordionItems.map((value, index) => {
                        return (
                            <div key={`accordion_${index}`} className="col-md-12 col-12">
                                <AccordionItem key={`accordion_${index}`} accordionItem={value} index={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Accordion;