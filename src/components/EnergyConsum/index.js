import React from "react";
import { Link } from "react-router-dom";
import TitleSectionCalc from "../TitleSectionCalc";
import ChangePanel from "../ChangePanel";
import './index.css';
import img from "./recibo.png";

const EnergyConsum = (props) => {

    const nextPage = (e) => {
        let irradianceAvg;
        if (props.calculator === "auto"){ 
            const irradianceSort = Object.values(props.irradiance.properties.parameter.ALLSKY_SFC_SW_DWN).sort((a,b) => a-b);
            irradianceAvg = ( irradianceSort[0] + irradianceSort[1] ) / 2;
            props.setMaxPower(1.2 * props.consum * 1000 / irradianceAvg / props.eff / 30);
        }
        if (props.calculator === "inter"){
            irradianceAvg = (props.irradiance.properties.parameter.ALLSKY_SFC_SW_DWN[202013] + props.irradiance.properties.parameter.ALLSKY_SFC_SW_DWN[202113]) / 2; 
        }
        

        props.setMinPower(props.consum * 1000 / irradianceAvg / props.eff / 30);

        e.preventDefault();
        props.setPanel(props.panels[2]);
        window.scrollTo({
            left: 0,
            top: 90,
            behavior: "smooth",
        });
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[0]);
        window.scrollTo({
            left: 0,
            top: 90,
            behavior: "smooth",
        });
    }

    const getPotential = (e) => {
        if (e.target.value === "Poseo aparatos eléctricos moderados") props.setPotential(24);
        if (e.target.value === "Poseo aparatos eléctricos moderados y aire acondicionado") props.setPotential(48);
        if (e.target.value === "Poseo una gran cantidad de aparatos eléctricos") props.setPotential(48);
        if (e.target.value === "Poseo una gran cantidad de aparatos eléctricos y aire acondicionado") props.setPotential(72);
    }

    return (
        <div className="solarCalcContainer">
            <TitleSectionCalc>Introduce tu consumo eléctrico mensual</TitleSectionCalc>
            <div className="energyConsumptionCont">
                <div className="energyConsumptionTxtCont">
                    <input className="energyConsumptionInput" type="tel" placeholder="1234" pattern="[0-9]*" autoFocus
                        value={props.consum === 0 ? "" : props.consum}
                        onChange={e => { props.setConsum(e.target.validity.valid ? e.target.value : props.consum) }} />
                    <select className="solarSelector energySelector" defaultValue="Poseo aparatos eléctricos moderados" onClick={e => getPotential(e)}>
                        <option className="solarSelectorOption">Poseo aparatos eléctricos moderados</option>
                        <option className="solarSelectorOption">Poseo aparatos eléctricos moderados y aire acondicionado</option>
                        <option className="solarSelectorOption">Poseo una gran cantidad de aparatos eléctricos</option>
                        <option className="solarSelectorOption">Poseo una gran cantidad de aparatos eléctricos y aire acondicionado</option>
                    </select>
                    <p className="energyConsumptionTxt">Tu consumo eléctrico lo puedes encontrar en tu recibo de luz, aparecerá en kWh y con
                        el concepto de energía o similar.</p>
                    <div className="energyConsumptionInfoCont">
                        <p className="energyConsumptionInfo">En caso de no contar con un recibo eléctrico vaya a:</p>
                        <Link className="energyConsumptionLink" to="/informacion-adicional/#calcular-consumo-electrico">
                            ¿Cómo calcular mi consumo eléctrico?</Link>
                    </div>
                </div>
                <div className="energyImgCont"><img className="energyImg" src={img} alt="consumo eléctrico en el recibo de luz" /></div>
            </div>
            <div className="changePanelCont">
                <ChangePanel action={previousPage}>Atrás</ChangePanel>
                {props.consum ? <ChangePanel action={nextPage}>Siguiente</ChangePanel> : null }
            </div>
        </ div>
    )
}

export default EnergyConsum;