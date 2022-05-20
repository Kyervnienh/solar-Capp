import React from "react";
import TitleSectionCalc from "../TitleSectionCalc";
import ChangePanel from "../ChangePanel";
import fichaSolar from "./ficha-panel-solar.png";
import "./index.css"

const SolarPanels = (props) => {

    const calculatePanels = () => {
        props.setPanelSerie(Math.ceil(props.potential / props.solarPanel[1].vmp));
        props.setPanelParallel(Math.ceil(Math.ceil(props.minPower / props.solarPanel[1].power) / Math.ceil(props.potential / props.solarPanel[1].vmp)));
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
                <select className="solarSelector" defaultValue={props.solarPanel[0]}
                    onChange={e => props.setSolarPanel([e.target.value, props.solarPanelsInfo[e.target.value]])}>
                    {Object.keys(props.solarPanelsInfo).map(name => <option key={name} className="solarSelectorOption">{name}</option>)}
                </select>
            </div>
            <TitleSectionCalc>Características del panel solar seleccionado</TitleSectionCalc>
            <div className="solarPanelStatsSection">
                <div className="solarPanelStatsCont">
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Voltaje de circuito abierto:</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?"
                            value={props.solarPanel[1].voc ? props.solarPanel[1].voc : ""} onChange={e => {
                                if (e.target.validity.valid) {
                                    let newData = [...props.solarPanel];
                                    newData[1] = { ...newData[1], voc: e.target.value }
                                    props.setSolarPanel(newData);
                                }
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Corriente de corto circuito:</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?"
                            value={props.solarPanel[1].isc ? props.solarPanel[1].isc : ""} onChange={e => {
                                if (e.target.validity.valid) {
                                    let newData = [...props.solarPanel];
                                    newData[1] = { ...newData[1], isc: e.target.value }
                                    props.setSolarPanel(newData);
                                }
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Potencia máxima (Pmax):</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" 
                            value={props.solarPanel[1].power ? props.solarPanel[1].power : ""} onChange={e => {
                                if (e.target.validity.valid) {
                                    let newData = [...props.solarPanel];
                                    newData[1] = { ...newData[1], power: e.target.value }
                                    props.setSolarPanel(newData);
                                }
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Corriente máxima (Imp):</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" 
                            value={props.solarPanel[1].imp ? props.solarPanel[1].imp : ""} onChange={e => {
                                if (e.target.validity.valid) {
                                    let newData = [...props.solarPanel];
                                    newData[1] = { ...newData[1], imp: e.target.value }
                                    props.setSolarPanel(newData);
                                }
                            }} />
                    </div>
                    <div className="solarPanelStat">
                        <p className="solarCalcTxtElement">Voltaje máximo (Vmp):</p>
                        <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?" 
                            value={props.solarPanel[1].vmp ? props.solarPanel[1].vmp : ""} onChange={e => {
                                if (e.target.validity.valid) {
                                    let newData = [...props.solarPanel];
                                    newData[1] = { ...newData[1], vmp: e.target.value }
                                    props.setSolarPanel(newData);
                                }
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

            { props.panelParallel && props.panelSerie ? <TitleSectionCalc>Paneles solares necesarios</TitleSectionCalc> : null}
            { props.panelParallel && props.panelSerie ? <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement">Total:
                    <span className="solarCalcTxtElementSpan">{props.panelParallel * props.panelSerie}</span></p>
                <p className="solarCalcTxtElement">Conectados en paralelo:
                    <span className="solarCalcTxtElementSpan">{props.panelParallel}</span></p>
                <p className="solarCalcTxtElement">Conectados en serie:
                    <span className="solarCalcTxtElementSpan">{props.panelSerie}</span></p>
            </div> : null}
            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Atrás</ChangePanel>
                <ChangePanel action={nextPage}>Siguiente</ChangePanel>
            </div>

        </div>
    )
}

export default SolarPanels;