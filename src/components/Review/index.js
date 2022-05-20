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
            top: 100,
            behavior: "smooth",
        });
    }


    return (
        <div className="solarCalcContainer">
            <TitleSectionCalc>Resumen</TitleSectionCalc>
            <div className="solarCalcReview">
                <p className="solarCalcTitleElement">Paneles solares</p>
                <p className="solarCalcTxtElement">Cantidad: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.panelParallel * props.panelSerie}</span></p>
                <p className="solarCalcTxtElement">Potencia (c/u): <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarPanel[1].power + " W"}</span></p>
                <p></p>
                <p className="solarCalcTitleElement">Baterías solares</p>
                <p className="solarCalcTxtElement">Cantidad: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.batteryParallel * props.batterySerie}</span></p>
                <p className="solarCalcTxtElement">Voltaje (c/u): <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarBattery[1].potential + " V"}</span></p>
                <p className="solarCalcTxtElement">Capacidad (c/u): <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarBattery[1].capacity + " Ah"}</span></p>
                <p className="solarCalcTitleElement">Inversor</p>
                <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.potential + " V"}</span></p>
                <p className="solarCalcTxtElement">Potencia nominal: <span className="solarCalcTxtElementSpan reviewSpan">
                    {Math.floor((props.solarPanel[1].power * props.panelParallel * props.panelSerie) / 500) * 500 + " VA"}</span></p>
                <p></p>
                <p className="solarCalcTitleElement">Regulador de carga</p>
                <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.potential + " V"}</span></p>
                <p className="solarCalcTxtElement">Intensidad mínima: <span className="solarCalcTxtElementSpan reviewSpan">
                    {props.solarPanel[1].isc * props.panelParallel * 1.25 + " A"}</span></p>
                <p className="solarCalcTxtElement">Potencia: <span className="solarCalcTxtElementSpan reviewSpan">
                    {Math.floor((props.solarPanel[1].power * props.panelParallel * props.panelSerie) / 500) * 500 + " W"}</span></p>
            </div>

            <div className='changePanelReview'>
                <ChangePanel action={action}>Atrás</ChangePanel>
            </div>
        </div>
    )
}

export default Review;