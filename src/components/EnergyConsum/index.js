import React from "react";
import { Link } from "react-router-dom";
import TitleSectionCalc from "../../TitleSectionCalc";
import ChangePanel from "../ChangePanel";
import './index.css';
import img from "./recibo.png";

const EnergyConsum = (props) => {

    const nextPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[2]);
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[0]);
    }

    return (
        <div className={props.showPanel}>
            <TitleSectionCalc>Introduce tu consumo eléctrico</TitleSectionCalc>
            <div className="energyConsumptionCont">
                <div className="energyConsumptionTxtCont">
                    <input className="energyConsumptionInput" onChange={e => { props.setConsum(e.target.value) }} />
                    <p className="energyConsumtionTxt">Tu consumo eléctrico lo puedes encontrar en tu recibo de luz, aparecerá en kWh y con
                        el concepto de energía o similar.</p>
                    <p className="energyConsumtionInfo">En caso de no contar con un recibo eléctrico ve a:</p>
                    <Link to="/informacion-adicional/#calcular-consumo-electrico">¿Cómo calcular mi consumo eléctrico?</Link>
                </div>
                <img className="energyImg" src={img} alt="consumo eléctrico en el recibo de luz" />

            </div>
            <div className="changePanelEnergy">
                <ChangePanel action={previousPage}>Anterior</ChangePanel>
                <ChangePanel action={nextPage}>Siguiente</ChangePanel>
            </div>
        </div>
    )
}

export default EnergyConsum;