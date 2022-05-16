import React from "react";
import "./index.css";

const TitleSectionCalc = ( props ) => {


    return(
        <div className='titleSectionCalcCont'>
            <h5 className='titleSectionCalc'>{props.children}</h5>
            <div className='calcLine'></div>
        </div>
    )
};

export default TitleSectionCalc;