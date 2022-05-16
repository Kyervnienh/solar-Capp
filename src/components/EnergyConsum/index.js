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
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
          });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[0]);
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
          });
    }

    return (
        <>
            <TitleSectionCalc>Introduce tu consumo eléctrico</TitleSectionCalc>
            <div className="energyConsumptionCont">
                <div className="energyConsumptionTxtCont">
                    <input className="energyConsumptionInput" type="tel" placeholder="1234" pattern="[1-9]*" autoFocus
                        value={props.consum === 0 ? "" : props.consum}
                        onChange={e => { props.setConsum(e.target.validity.valid ? e.target.value : props.consum) }} />
                    <p className="energyConsumptionTxt">Tu consumo eléctrico lo puedes encontrar en tu recibo de luz, aparecerá en kWh y con
                        el concepto de energía o similar.</p>
                    <div className="energyConsumptionInfoCont">
                        <p className="energyConsumptionInfo">En caso de no contar con un recibo eléctrico vaya a:</p>
                        <Link className="energyConsumptionLink" to="/informacion-adicional/#calcular-consumo-electrico">
                            ¿Cómo calcular mi consumo eléctrico?</Link>
                    </div>
                </div>
                <img className="energyImg" src={img} alt="consumo eléctrico en el recibo de luz" />
            </div>
            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Anterior</ChangePanel>
                <ChangePanel action={nextPage}>Siguiente</ChangePanel>
            </div>
        </>
    )
}

export default EnergyConsum;