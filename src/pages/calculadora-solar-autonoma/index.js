import React, { useState } from "react";
import EnergyConsum from "../../components/EnergyConsum";
import Map from "../../components/Map";
import Review from "../../components/Review";
import SelectCalc from "../../components/SelectCalc";
import SolarBatteries from "../../components/SolarBatteries";
import SolarInfo from "../../components/SolarInfo";
import SolarPanels from "../../components/SolarPanels";
import './index.css'

const SolarCalcAut = () => {

    const panels = ["mapa", "consumo", "paneles", "baterias", "resumen"];
    const [potential, setPotential] = useState(24);
    const [panel, setPanel] = useState(panels[0]);
    const [position, setPosition] = useState({ lat: 18.645031, lng: -91.822731 });
    const [consum, setConsum] = useState(Number);
    const [minPower, setMinPower] = useState();
    const [maxPower, setMaxPower] = useState();
    const [irradiance, setIrradiance] = useState();

    return (
        <>
            <h3 className="solarCalcTitle">Calculadora solar</h3>
            <SelectCalc selected="autonomo" />

            {panel === "mapa" ? <Map setIrradiance={setIrradiance} position={position} setPosition={setPosition} setPanel={setPanel} panels={panels} /> : null}

            {panel === "consumo" ? <EnergyConsum irradiance={irradiance} setMinPower={setMinPower} setMaxPower={setMaxPower} setPotential={setPotential} 
            setPanel={setPanel} panels={panels} setConsum={setConsum} consum={consum} /> : null}

            {panel === "paneles" ? <SolarPanels minPower={minPower} maxPower={maxPower}  potential={potential} setPanel={setPanel} 
            panels={panels} /> : null}

            {panel === "baterias" ? <SolarBatteries setPanel={setPanel} panels={panels} /> : null}

            {panel === "resumen" ? <Review setPanel={setPanel} panels={panels} /> : null}

            {console.log(position, consum, potential, minPower, irradiance)}

            <SolarInfo />
        </>
    );
}

export default SolarCalcAut;