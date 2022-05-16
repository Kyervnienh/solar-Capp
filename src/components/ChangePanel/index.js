import React from "react";
import "./index.css";

const ChangePanel = ( props ) => {


    return(
        <button className="changePanel" onClick={props.action}>{props.children}</button>
    )
}

export default ChangePanel;