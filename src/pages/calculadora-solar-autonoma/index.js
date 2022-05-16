import React, { useState } from "react";
import EnergyConsum from "../../components/EnergyConsum";
import Map from "../../components/Map";
import SelectCalc from "../../components/SelectCalc";
import SolarInfo from "../../components/SolarInfo";
import SolarPanels from "../../components/SolarPanels";
import './index.css'

const SolarCalcAut = () => {

    const panels = ["mapa", "consumo", "paneles", "baterias", "resumen"];

    const [panel, setPanel] = useState(panels[0]);
    const [position, setPosition] = useState({ lat: 18.645031, lng: -91.822731 });
    const [consum, setConsum] = useState(Number);

    return (
        <>
            <h3 className="solarCalcTitle">Calculadora solar</h3>
            <SelectCalc selected="autonomo" />

            {panel === "mapa" ? <Map position={position} setPosition={setPosition} setPanel={setPanel} panels={panels} /> : null}

            {panel === "consumo" ? <EnergyConsum  setPanel={setPanel} panels={panels} setConsum={setConsum} consum={consum} /> : null}

            {panel === "paneles" ? <SolarPanels setPanel={setPanel} panels={panels} /> : null}

            {console.log(position, consum)}

            <SolarInfo />
        </>
    );
}

export default SolarCalcAut;