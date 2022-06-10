import React from "react";
import TitleSectionCalc from "../TitleSectionCalc";
import ChangePanel from "../ChangePanel";

import "./index.css";

const Review = (props) => {

    const action = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[3]);
        window.scrollTo({
            left: 0,
            top: 90,
            behavior: "smooth",
        });
    }


    return (
        <div className="solarCalcContainer">
            <TitleSectionCalc>Resumen</TitleSectionCalc>
            <div className="solarCalcReview">
                <p id="panel" className="solarCalcTitleElement">Paneles solares</p>
                <p id="cantidadPanel" className="solarCalcTxtElement">Cantidad: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.panelParallel * props.panelSerie}</span></p>
                <p id="potenciaPanel" className="solarCalcTxtElement">Potencia (c/u): <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarPanel[1].power + " W"}</span></p>
                <p id="bateria" className="solarCalcTitleElement">Baterías</p>
                <p id="cantidadBateria" className="solarCalcTxtElement">Cantidad: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.batteryParallel * props.batterySerie}</span></p>
                <p id="voltajeBateria" className="solarCalcTxtElement">Voltaje (c/u): <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarBattery[1].potential + " V"}</span></p>
                <p id="capacidadBateria" className="solarCalcTxtElement">Capacidad (c/u): <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarBattery[1].capacity + " Ah"}</span></p>
                <p id="inversor" className="solarCalcTitleElement">Inversor</p>
                <p id="voltajeInversor" className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.potential + " V"}</span></p>
                <p id="potenciaInversor" className="solarCalcTxtElement">Potencia nominal: <span className="solarCalcTxtElementSpan reviewSpan">
                    {Math.floor((props.solarPanel[1].power * props.panelParallel * props.panelSerie) / 500) * 500 + " VA"}</span></p>
                <p id="regulador" className="solarCalcTitleElement">Regulador de carga</p>
                <p id="voltajeRegulador" className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.potential + " V"}</span></p>
                <p id="intensidadRegulador" className="solarCalcTxtElement">Intensidad mínima: <span className="solarCalcTxtElementSpan reviewSpan">
                    {10*Math.ceil(props.solarPanel[1].isc * props.panelParallel * 1.25 / 10) + " A"}</span></p>
                <p id="potenciaRegulador" className="solarCalcTxtElement">Potencia: <span className="solarCalcTxtElementSpan reviewSpan">
                    {Math.floor((props.solarPanel[1].power * props.panelParallel * props.panelSerie) / 500) * 500 + " W"}</span></p>
            </div>

            <div className='changePanelReview'>
                <ChangePanel action={action}>Atrás</ChangePanel>
            </div>
        </div>
    )
}

export default Review;