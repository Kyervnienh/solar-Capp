import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const SelectCalc = (props) => {
    let autoSelected = false;
    let interSelected = false

    if(props.selected === "autonomo") autoSelected = true;
    if(props.selected === "interconectado") interSelected = true;


    return(

        <div className="buttonsSection">
            <Link className={`buttonCalcSelectionAuto ${autoSelected ? "selected" : "noSelected"}`} to="/calculadora-solar/sistema-autonomo">Autónomo</Link>
            <Link className={`buttonCalcSelectionInter ${interSelected ? "selected" : "noSelected"}`} to="/calculadora-solar/sistema-interconectado">interconectado</Link>
        </div>
    )
}

export default SelectCalc;