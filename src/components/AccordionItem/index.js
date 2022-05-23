import React, { useState } from "react";
import "./index.css";

const AccordionItem = (props) => {

    const [expanded, setExpanded] = useState(false);


    return(
        <div id={`#${props.title}`} className={expanded ? "expanded" : "" }>
            <button type="button" className="accordionTitle"  onClick={ () => setExpanded(!expanded)}>
                {props.title} <i className="fa-solid fa-angle-down" /></button>

            <p className="accordionTxt">{props.txt}</p>
        </div>
    )
}

export default AccordionItem;