import React, { useState } from "react";
import TitleSectionCalc from "../TitleSectionCalc";
import ChangePanel from "../ChangePanel";
import fichaSolar from "./ficha-panel-solar.png";
import "./index.css"

const SolarPanels = (props) => {

    const solarPanelsInfo = {
        "Personalizado": {
            power: Number,
            voc: Number,
            isc: Number,
            vmp: Number,
            imp: Number
        },
        "Panel solar 330 W": {
            power: 330,
            voc: 46.79,
            isc: 9.18,
            vmp: 37.87,
            imp: 9.71
        }
    }

    const [solarPanel, setSolarPanel] = useState(solarPanelsInfo["Personalizado"]);
    const [panelQuantity, setPanelQuantity] = useState(0);
    const [panelParallel, setPanelParallel] = useState(0);
    const [panelSerie, setPanelSerie] = useState(0);


    const calculatePanels = () => {

        setPanelQuantity(props.potential > solarPanel.vmp ? Math.ceil(props.minPower / solarPanel.power / 2) * 2 :
            Math.ceil(props.minPower / solarPanel.power));
        setPanelSerie(Math.ceil(props.potential / solarPanel.vmp));
        setPanelParallel(Math.ceil(Math.ceil(props.minPower / solarPanel.power) / Math.ceil(props.potential / solarPanel.vmp)));
    }

    const nextPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[3]);
        window.scrollTo({
            left: 0,
            top: 100,
            behavior: "smooth",
        });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[1]);
        window.scrollTo({
            left: 0,
            top: 100,
            behavior: "smooth",
        });
    }

    return (
        <div className="solarCalcContainer">
            <TitleSectionCalc>Características del sistema recomendado</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement ml-16">Voltaje: <span className="solarCalcTxtElementSpan">{props.potential} V</span></p>
                <p className="solarCalcTxtElement">Potencia mínima: <span className="solarCalcTxtElementSpan">
                    {props.minPower.toFixed(2)} W</span></p>
                <p className="solarCalcTxtElement">Potencia máxima: <span className="solarCalcTxtElementSpan">
                    {props.maxPower.toFixed(2)} W</span></p>
            </div>
            <div className="solarPanelSelectionCont">
                <p className="solarCalcTxtElement">Selecciona un panel solar estándar o introduce las caracteristicas de tu propio panel solar:</p>
                <select className="solarSelector" defaultValue="Personalizado"
                    onChange={e => setSolarPanel(solarPanelsInfo[e.target.value])}>
                    <option className="solarSelectorOption">Personalizado</option>
                    <option className="solarSelectorOption">Panel solar 330 W</option>

                </select>
            </div>
            <TitleSectionCalc>Características del panel solar seleccionado</TitleSectionCalc>
            <div className="solarPanelStatsSection">
                <div className="solarPanelStatsCont">
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Voltaje de circuito abierto:</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" defaultValue={solarPanel.voc}
                            value={solarPanel.voc} onChange={e => {
                                setSolarPanel(e.target.validity.valid ? { ...solarPanel, voc: e.target.value } : solarPanel)
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Corriente de corto circuito:</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" defaultValue={solarPanel.isc}
                            value={solarPanel.isc} onChange={e => {
                                setSolarPanel(e.target.validity.valid ? { ...solarPanel, isc: e.target.value } : solarPanel)
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Potencia máxima (Pmax):</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" defaultValue={solarPanel.power}
                            value={solarPanel.power} onChange={e => {
                                setSolarPanel(e.target.validity.valid ? { ...solarPanel, power: e.target.value } : solarPanel)
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Corriente máxima (Imp):</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" defaultValue={solarPanel.imp}
                            value={solarPanel.imp} onChange={e => {
                                setSolarPanel(e.target.validity.valid ? { ...solarPanel, imp: e.target.value } : solarPanel)
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Voltaje máximo (Vmp):</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" defaultValue={solarPanel.vmp}
                            value={solarPanel.vmp} onChange={e => {
                                setSolarPanel(e.target.validity.valid ? { ...solarPanel, vmp: e.target.value } : solarPanel)
                            }} />
                    </div>
                </div>
                <div className="solarPanelStatsImgCont">
                    <img src={fichaSolar} alt="ficha panel solar" className="solarPanelStatsImg" />
                    <p className="solarPanelStatsImgTxt">Ejemplo de ficha técnica de un panel solar</p>
                </div>
            </div>
            <div className="calculatePanelsCont">
                <button className="changePanel calculatePanels" onClick={calculatePanels}> Calcular los paneles solares necesarios</button>
            </div>

            {panelQuantity && panelParallel && panelSerie ? <TitleSectionCalc>Paneles solares necesarios</TitleSectionCalc> : null}
            <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement">Total: <span className="solarCalcTxtElementSpan">{panelQuantity}</span></p>
                <p className="solarCalcTxtElement">Conectados en paralelo: <span className="solarCalcTxtElementSpan">{panelParallel}</span></p>
                <p className="solarCalcTxtElement">Conectados en serie: <span className="solarCalcTxtElementSpan">{panelSerie}</span></p>
            </div>
            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Atrás</ChangePanel>
                <ChangePanel action={nextPage}>Siguiente</ChangePanel>
            </div>

        </div>
    )
}

export default SolarPanels;