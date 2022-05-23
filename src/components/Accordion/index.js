import React from "react";
import AccordionItem from "../AccordionItem";
import "./index.css"

const Accordion = (props) => {

    return (
        <div className="accordionContainer">
            {props.info.map(infoItem => <AccordionItem key={infoItem.title} txt={infoItem.text}  title={infoItem.title} />)}
            
        </div>
    )
}

export default Accordion;