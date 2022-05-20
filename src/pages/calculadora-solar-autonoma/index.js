import React, { useState } from "react";
import EnergyConsum from "../../components/EnergyConsum";
import Map from "../../components/Map";
import Review from "../../components/Review";
import SelectCalc from "../../components/SelectCalc";
import SolarBatteries from "../../components/SolarBatteries";
import SolarInfo from "../../components/SolarInfo";
import SolarPanels from "../../components/SolarPanels";
import './index.css';
import solarPanelsInfo from "../../inventory/solarPanelsInfo.json";
import solarBatteriesInfo from "../../inventory/solarBatteriesInfo.json";

const SolarCalcAut = () => {

    const panels = ["mapa", "consumo", "paneles", "baterias", "resumen"];
    const [potential, setPotential] = useState(24);
    const [panel, setPanel] = useState(panels[0]);
    const [position, setPosition] = useState({ lat: 18.645031, lng: -91.822731 });

    const [consum, setConsum] = useState(Number);
    const [irradiance, setIrradiance] = useState();

    const [minPower, setMinPower] = useState();
    const [maxPower, setMaxPower] = useState();

    const [solarPanel, setSolarPanel] = useState(["Personalizado", solarPanelsInfo["Personalizado"]]);
    const [panelParallel, setPanelParallel] = useState(0);
    const [panelSerie, setPanelSerie] = useState(0);

    const [solarBattery, setSolarBattery] = useState(["Personalizado", solarBatteriesInfo["Personalizado"]]);
    const [minCapacity, setMinCapacity] = useState(0);
    const [batterySerie, setBatterySerie] = useState(0);
    const [batteryParallel, setBatteryParallel] = useState(0)

    return (
        <>
            <h3 className="solarCalcTitle">Calculadora solar</h3>
            <SelectCalc selected="autonomo" />

            {panel === "mapa" ? <Map setIrradiance={setIrradiance} position={position} setPosition={setPosition} setPanel={setPanel} panels={panels} /> : null}

            {panel === "consumo" ? <EnergyConsum irradiance={irradiance} setMinPower={setMinPower} setMaxPower={setMaxPower} setPotential={setPotential}
                setPanel={setPanel} panels={panels} setConsum={setConsum} consum={consum} /> : null}

            {panel === "paneles" ? <SolarPanels minPower={minPower} maxPower={maxPower} potential={potential} setPanel={setPanel}
                panels={panels} setPanelParallel={setPanelParallel} setPanelSerie={setPanelSerie} panelParallel={panelParallel}
                panelSerie={panelSerie} solarPanel={solarPanel} setSolarPanel={setSolarPanel} solarPanelsInfo={solarPanelsInfo} /> : null}

            {panel === "baterias" ? <SolarBatteries setPanel={setPanel} panels={panels} potential={potential} solarBattery={solarBattery}
                setSolarBattery={setSolarBattery} solarBatteriesInfo={solarBatteriesInfo} setMinCapacity={setMinCapacity} minCapacity={minCapacity}
                consum={consum} batterySerie={batterySerie} batteryParallel={batteryParallel} setBatteryParallel={setBatteryParallel}
                setBatterySerie={setBatterySerie} panelParallel={panelParallel} panelSerie={panelSerie} solarPanel={solarPanel} /> : null}

            {panel === "resumen" ? <Review setPanel={setPanel} panels={panels} solarPanel={solarPanel} solarBattery={solarBattery} potential={potential}
                panelParallel={panelParallel} panelSerie={panelSerie} batteryParallel={batteryParallel} batterySerie={batterySerie} /> : null}

            <SolarInfo />
        </>
    );
}

export default SolarCalcAut;