import React, { useState } from "react";
import TitleSectionCalc from "../../TitleSectionCalc";
import ChangePanel from "../ChangePanel";
import fichaSolar from "./ficha-panel-solar.png";
import "./index.css";

const SolarPanels = (props) => {

    const [solarPanel, setSolarPanel] = useState("Personalizado");

    const nextPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[3]);
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[1]);
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <TitleSectionCalc>Características del sistema recomendado</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement ml-16">Voltaje: <span className="solarCalcTxtElementSpan">{42 + " V"}</span></p>
                <p className="solarCalcTxtElement">Potencia mínima: <span className="solarCalcTxtElementSpan">{2200 + " W"}</span></p>
                <p className="solarCalcTxtElement">Potencia máxima: <span className="solarCalcTxtElementSpan">{2640 + " W"}</span></p>
            </div>
            <div className="solarPanelSelectionCont">
                <p className="solarCalcTxtElement">Selecciona un panel solar estándar o introduce las caracteristicas de tu propio panel solar:</p>
                <select className="solarSelector" defaultValue="Personalizado" onChange={e => setSolarPanel(e.target.value)}>
                    <option className="solarSelectorOption">Personalizado</option>
                    <option className="solarSelectorOption">Panel solar 1</option>
                    <option className="solarSelectorOption">Panel solar 2</option>
                    <option className="solarSelectorOption">Panel solar 3</option>
                    <option className="solarSelectorOption">Panel solar 4</option>
                </select>
            </div>
            <TitleSectionCalc>Características del panel solar seleccionado</TitleSectionCalc>
            <div className="solarPanelStatsSection">
                <div className="solarPanelStatsCont">
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Voltaje de circuito abierto:</p>
                        <input className="solarCalcInputElement" />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Corriente de circuito abierto:</p>
                        <input className="solarCalcInputElement" />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Potencia máxima (Pmax):</p>
                        <input className="solarCalcInputElement" />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Corriente máxima (Imp):</p>
                        <input className="solarCalcInputElement" />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Voltaje máximo (Vmp):</p>
                        <input className="solarCalcInputElement" />
                    </div>
                </div>
                <div className="solarPanelStatsImgCont">
                <img src={fichaSolar} alt="ficha panel solar" className="solarPanelStatsImg" />
                <p className="solarPanelStatsImgTxt">Ejemplo de ficha técnica de un panel solar</p>
                </div>
            </div>

            <TitleSectionCalc>Paneles solares necesarios</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement ml-16">Total: <span className="solarCalcTxtElementSpan">{7}</span></p>
                <p className="solarCalcTxtElement">Conectados en paralelo: <span className="solarCalcTxtElementSpan">{7}</span></p>
                <p className="solarCalcTxtElement">Conectados en serie: <span className="solarCalcTxtElementSpan">{1}</span></p>
            </div>
            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Anterior</ChangePanel>
                <ChangePanel action={nextPage}>Siguiente</ChangePanel>
            </div>

        </>
    )
}

export default SolarPanels;