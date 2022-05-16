import React, { useState } from "react";
import ChangePanel from "../ChangePanel";
import TitleSectionCalc from "../TitleSectionCalc";
import "./index.css"

const SolarBatteries = (props) => {

    const [solarBattery, setSolarBattery] = useState('Personalizado');
    const [days, setDays] = useState(2);

    const nextPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[4]);
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[2]);
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }


    return (
        <>
            <TitleSectionCalc>Características del arreglo de baterías recomendado</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <div className="solarBatteriesDays">
                    <p className="solarCalcTxtElement">Días de autonomía:</p>
                    <input className="solarCalcInputElement daysInput" defaultValue={days} onChange={e => setDays(e.target.value)} />
                </div>
                <p className="solarCalcTxtElement">Voltaje: <span className="solarCalcTxtElementSpan">{24 + " V"}</span></p>
                <p className="solarCalcTxtElement">Capacidad total recomendada: <span className="solarCalcTxtElementSpan">{688 + " Ah"}</span></p>
            </div>

            <div className="solarPanelSelectionCont">
                <p className="solarCalcTxtElement">Selecciona un panel solar estándar o introduce las caracteristicas de tu propio panel solar:</p>
                <select className="solarSelector" defaultValue="Personalizado" onChange={e => setSolarBattery(e.target.value)}>
                    <option className="solarSelectorOption">Personalizado</option>
                    <option className="solarSelectorOption">Batería solar 1</option>
                    <option className="solarSelectorOption">Batería solar 2</option>
                    <option className="solarSelectorOption">Batería solar 3</option>
                    <option className="solarSelectorOption">Batería solar 4</option>
                </select>
            </div>

            <TitleSectionCalc>Características de la batería solar seleccionada</TitleSectionCalc>
            <div className="solarCalcTxtElementCont solarBatteryCont">
                <div className="solarBatteryStat">
                    <p className="solarCalcTxtElement">Voltaje (V):</p>
                    <input className="solarCalcInputElement" />
                </div>
                <div className="solarBatteryStat">
                    <p className="solarCalcTxtElement">Capacidad (Ah):</p>
                    <input className="solarCalcInputElement" />
                </div>
            </div>

            <TitleSectionCalc>Baterías necesarias</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement">Total: <span className="solarCalcTxtElementSpan">{12}</span></p>
                <p className="solarCalcTxtElement">Conectados en paralelo: <span className="solarCalcTxtElementSpan">{6}</span></p>
                <p className="solarCalcTxtElement">Conectados en serie: <span className="solarCalcTxtElementSpan">{2}</span></p>
            </div>

            <TitleSectionCalc>Inversor recomendado</TitleSectionCalc>
            <div className="solarCalcTxtElementCont solarBatteryCont">
                <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan">{24 + " V"}</span></p>
                <p className="solarCalcTxtElement">Potencia nominal: <span className="solarCalcTxtElementSpan">{2200 + " VA"}</span></p>
            </div>

            <TitleSectionCalc>Regulador de carga recomendado</TitleSectionCalc>
            <div className="solarCalcTxtElementCont">
                <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan">{24 + " V"}</span></p>
                <p className="solarCalcTxtElement">Intensidad nominal: <span className="solarCalcTxtElementSpan">{80 + " A"}</span></p>
                <p className="solarCalcTxtElement">Potencia de carga: <span className="solarCalcTxtElementSpan">{2000 + " W"}</span></p>
            </div>

            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Atrás</ChangePanel>
                <ChangePanel action={nextPage}>Siguiente</ChangePanel>
            </div>

        </>
    )
}

export default SolarBatteries;