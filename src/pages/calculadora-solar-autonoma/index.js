import React, { useState } from "react";
import EnergyConsum from "../../components/EnergyConsum";
import Map from "../../components/Map";
import SelectCalc from "../../components/SelectCalc";
import './index.css'

const SolarCalcAut = () => {

    const panels = ["mapa", "consumo", "paneles", "baterias", "resumen"];

    const [panel, setPanel] = useState(panels[0]);
    const [consum, setConsum] = useState();

    return(
        <>
        <h3 className="solarCalcTitle">Calculadora solar</h3>
        <SelectCalc selected="autonomo"/>
        <Map setPanel={setPanel} panels={panels} showPanel={"mapa" === panel ? "showPanel" : "hidePanel"} />
        <EnergyConsum setPanel={setPanel} panels={panels} setConsum={setConsum}
        showPanel={"consumo" === panel ? "showPanel" : "hidePanel"} />
        </>
    );
}

export default SolarCalcAut;