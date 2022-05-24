import React from "react";
import TitleSectionCalc from "../TitleSectionCalc";
import fichaSolar from "./ficha-panel-solar.png";
import "./index.css";

const SelectSolarPanel = (props) => {

    return(
        <>
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
                            <p className="solarCalcTxtElement">Voltaje de circuito abierto (Voc):</p>
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
                            <p className="solarCalcTxtElement">Corriente de corto circuito (Isc):</p>
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
        </>
    )
}

export default SelectSolarPanel;



