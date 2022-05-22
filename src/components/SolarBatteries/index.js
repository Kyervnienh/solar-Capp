import React, { useState } from "react";
import ChangePanel from "../ChangePanel";
import TitleSectionCalc from "../TitleSectionCalc";
import "./index.css"

const SolarBatteries = (props) => {

    const [days, setDays] = useState(2);

    props.setMinCapacity(2 * props.consum * 1000 / props.potential / 30 / 0.8 / 0.85 / 0.8);

    const calculateBatteries = () => {
        if (props.solarBattery[1].potential && props.solarBattery[1].capacity) {
            props.setBatterySerie(Math.round(props.potential / props.solarBattery[1].potential));
            props.setBatteryParallel(Math.round(props.minCapacity / props.solarBattery[1].capacity));
        } else {
            props.setBatteryParallel(0);
            props.setBatterySerie(0);
        }
    }

    const nextPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[4]);
        window.scrollTo({
            left: 0,
            top: 100,
            behavior: "smooth",
        });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[2]);
        window.scrollTo({
            left: 0,
            top: 100,
            behavior: "smooth",
        });
    }


    return (
        <div className="solarCalcContainer">
            <TitleSectionCalc>Características del arreglo de baterías recomendado</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <div className="solarBatteriesDays">
                    <p className="solarCalcTxtElement">Días de autonomía:</p>
                    <input className="solarCalcInputElement daysInput" type="tel" pattern="[0-9]*" value={days === 0 ? "" : days}
                        onChange={e => { setDays(e.target.validity.valid ? e.target.value : days) }}
                        onKeyUp={props.setMinCapacity(days * props.consum * 1000 / props.potential / 30 / 0.8 / 0.85 / 0.8)} />
                </div>
                <p className="solarCalcTxtElement">Voltaje: <span className="solarCalcTxtElementSpan">{props.potential + " V"}</span></p>
                <p className="solarCalcTxtElement">Capacidad total recomendada: <span className="solarCalcTxtElementSpan">
                    {props.minCapacity.toFixed(2) + " Ah"}</span></p>
            </div>

            <div className="solarPanelSelectionCont">
                <p className="solarCalcTxtElement">Selecciona una batería estándar o introduce las caracteristicas de tu propia batería:</p>
                <select className="solarSelector batteriesSelector" defaultValue={props.solarBattery[0]}
                    onChange={e => props.setSolarBattery([e.target.value, props.solarBatteriesInfo[e.target.value]])}>
                    {Object.keys(props.solarBatteriesInfo).map(name => <option key={name} className="solarSelectorOption">{name}</option>)}
                </select>
            </div>

            <TitleSectionCalc>Características de la batería solar seleccionada</TitleSectionCalc>
            <div className="solarCalcTxtElementCont solarBatteryCont">
                <div className="solarBatteryStat">
                    <p className="solarCalcTxtElement">Voltaje (V):</p>
                    <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?"
                        value={props.solarBattery[1].potential ? props.solarBattery[1].potential : ""} onChange={e => {
                            if (e.target.validity.valid) {
                                let newData = [...props.solarBattery];
                                newData[1] = { ...newData[1], potential: e.target.value }
                                props.setSolarBattery(newData);
                            }
                        }} />
                </div>
                <div className="solarBatteryStat">
                    <p className="solarCalcTxtElement">Capacidad (Ah):</p>
                    <input className="solarCalcInputElement" type="tel" pattern="[0-9]+([\.,][0-9]{0,2})?"
                        value={props.solarBattery[1].capacity ? props.solarBattery[1].capacity : ""} onChange={e => {
                            if (e.target.validity.valid) {
                                let newData = [...props.solarBattery];
                                newData[1] = { ...newData[1], capacity: e.target.value }
                                props.setSolarBattery(newData);
                            }
                        }} />
                </div>
            </div>

            <div className="calculatePanelsCont">
                <button className="changePanel calculatePanels" onClick={calculateBatteries}> Calcular las baterías necesarias</button>
            </div>

            {props.batteryParallel && props.batterySerie ? <>

                <TitleSectionCalc>Baterías necesarias</TitleSectionCalc>
                <div className="solarCalcTxtElementCont">
                    <p className="solarCalcTxtElement">Total: <span className="solarCalcTxtElementSpan">
                        {props.batteryParallel * props.batterySerie}</span></p>
                    <p className="solarCalcTxtElement">Conectados en paralelo: <span className="solarCalcTxtElementSpan">{props.batteryParallel}</span></p>
                    <p className="solarCalcTxtElement">Conectados en serie: <span className="solarCalcTxtElementSpan">{props.batterySerie}</span></p>
                </div>

                <TitleSectionCalc>Inversor recomendado</TitleSectionCalc>
                <div className="solarCalcTxtElementCont solarBatteryCont">
                    <p className="solarCalcTxtElement">Voltaje de entrada: <span className="solarCalcTxtElementSpan">{props.potential + " V"}</span></p>
                    <p className="solarCalcTxtElement">Potencia nominal: <span className="solarCalcTxtElementSpan">
                        {Math.floor((props.solarPanel[1].power * props.panelParallel * props.panelSerie) / 500) * 500 + " VA"}</span></p>
                </div>

                <TitleSectionCalc>Regulador de carga recomendado</TitleSectionCalc>
                <div className="solarCalcTxtElementCont">
                    <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan">{props.potential + " V"}</span></p>
                    <p className="solarCalcTxtElement">Intensidad nominal mínima: <span className="solarCalcTxtElementSpan">
                        {10 * Math.ceil(props.solarPanel[1].isc * props.panelParallel * 1.25 / 10) + " A"}</span></p>
                    <p className="solarCalcTxtElement">Potencia de carga: <span className="solarCalcTxtElementSpan">
                        {Math.floor((props.solarPanel[1].power * props.panelParallel * props.panelSerie) / 500) * 500 + " W"}</span></p>
                </div></> : null}

            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Atrás</ChangePanel>
                { props.batteryParallel && props.batterySerie ? <ChangePanel action={nextPage}>Siguiente</ChangePanel> : null }
            </div>

        </div>
    )
}

export default SolarBatteries;