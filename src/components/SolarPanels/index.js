import React from "react";
import TitleSectionCalc from "../TitleSectionCalc";
import ChangePanel from "../ChangePanel";
import "./index.css"
import SelectSolarPanel from "../SelectSolarPanel";

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
            top: 90,
            behavior: "smooth",
        });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[1]);
        window.scrollTo({
            left: 0,
            top: 90,
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
            <SelectSolarPanel solarPanel={props.solarPanel} solarPanelsInfo={props.solarPanelsInfo} setSolarPanel={props.setSolarPanel} />
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
                { props.panelParallel && props.panelSerie ? <ChangePanel action={nextPage}>Siguiente</ChangePanel> : null }
            </div>

        </div>
    )
}

export default SolarPanels;