import React, { useState } from "react";
import SelectCalc from "../../components/SelectCalc";
import SelectSolarPanel from "../../components/SelectSolarPanel";
import TitleSectionCalc from "../../components/TitleSectionCalc";
import "./index.css";
import solarPanelsInfo from "../../inventory/solarPanelsInfo.json";
import Map from "../../components/Map";
import EnergyConsum from "../../components/EnergyConsum";
import ChangePanel from "../../components/ChangePanel";
import SolarInfo from "../../components/SolarInfo";

const SolarCalcInter = () => {
  const panels = ["mapa", "consumo", "ahorro"];
  const [panel, setPanel] = useState("mapa");
  const [solarPanel, setSolarPanel] = useState([
    "Personalizado",
    solarPanelsInfo["Personalizado"],
  ]);

  const [position, setPosition] = useState({ lat: 18.645031, lng: -91.822731 });

  const [consum, setConsum] = useState(Number);
  const [irradiance, setIrradiance] = useState();

  const [solarPanelQuantity, setSolarPanelQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [panelCost, setPanelCost] = useState(0);

  const [minPower, setMinPower] = useState(0);

  const previousPage = (e) => {
    e.preventDefault();
    setPanel(panels[1]);
    window.scrollTo({
      left: 0,
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h3 className="solarCalcTitle">Calculadora solar interconectada</h3>
      <SelectCalc selected="interconectado"></SelectCalc>
      {panel === panels[0] ? (
        <Map
          setIrradiance={setIrradiance}
          position={position}
          setPosition={setPosition}
          setPanel={setPanel}
          panels={panels}
        />
      ) : null}
      {panel === panels[1] ? (
        <EnergyConsum
          irradiance={irradiance}
          setMinPower={setMinPower}
          setPotential={() => {}}
          setPanel={setPanel}
          panels={panels}
          setConsum={setConsum}
          consum={consum}
          eff={0.8}
          calculator="inter"
        />
      ) : null}
      {panel === panels[2] ? (
        <div className="solarCalcContainer">
          <TitleSectionCalc>Selección del panel solar</TitleSectionCalc>
          <SelectSolarPanel
            solarPanel={solarPanel}
            solarPanelsInfo={solarPanelsInfo}
            setSolarPanel={setSolarPanel}
          />
          <TitleSectionCalc>Ahorro energético</TitleSectionCalc>

          <div className="energySavingCont">
            <div className="energySavingSection">
              <p className="solarCalcTxtElement">Número de paneles solares:</p>
              <input
                className="solarCalcInputElement interInput1"
                type="tel"
                pattern="[0-9]*"
                value={solarPanelQuantity ? solarPanelQuantity : ""}
                onChange={(e) =>
                  setSolarPanelQuantity(
                    e.target.validity.valid
                      ? e.target.value
                      : solarPanelQuantity
                  )
                }
              />
            </div>
            <div className="energySavingSection">
              <p className="solarCalcTxtElement">
                Consumo eléctrico mensual (kWh):
              </p>
              <input
                className="solarCalcInputElement interInput"
                type="tel"
                pattern="[0-9]+([\.,][0-9]{0,2})?"
                value={consum ? consum : ""}
                onChange={(e) => {
                  if (e.target.validity.valid) {
                    setConsum(e.target.value);
                    const irradianceAvg =
                      (irradiance.properties.parameter
                        .ALLSKY_SFC_SW_DWN[202013] +
                        irradiance.properties.parameter
                          .ALLSKY_SFC_SW_DWN[202113]) /
                      2;

                    setMinPower(
                      (e.target.value * 1000) / irradianceAvg / 0.8 / 30
                    );
                  }
                }}
              />
            </div>
            <div className="energySavingSection">
              <p className="solarCalcTxtElement">Costo mensual actual ($):</p>
              <input
                className="solarCalcInputElement interInput"
                type="tel"
                pattern="[0-9]+([\.,][0-9]{0,2})?"
                value={cost ? cost : ""}
                onChange={(e) =>
                  setCost(e.target.validity.valid ? e.target.value : cost)
                }
              />
            </div>
            <p className="solarCalcTxtElement energySavingTxt">
              Consumo eléctrico mensual esperado al implementar el sistema
              fotovoltaico:
              <span className="solarCalcTxtElementSpan interSpan">
                {Math.round(
                  (1 - (solarPanelQuantity * solarPanel[1].power) / minPower) *
                    consum || 0
                ) + " kWh"}
              </span>
            </p>
            <p className="solarCalcTxtElement energySavingTxt">
              Costo del consumo eléctrico mensual esperado:
              <span className="solarCalcTxtElementSpan interSpan">
                {"$ " +
                  Math.round(
                    (1 -
                      (solarPanelQuantity * solarPanel[1].power) / minPower) *
                      cost || 0
                  )}
              </span>
            </p>
            <p className="solarCalcTxtElement energySavingTxt">
              Porcentaje de ahorro:
              <span className="solarCalcTxtElementSpan interSpan">
                {Math.round(
                  100 *
                    ((solarPanelQuantity * solarPanel[1].power) / minPower) || 0
                ) + " %"}
              </span>
            </p>
            <div className="energySavingSection">
              <p className="solarCalcTxtElement">
                Costo total de los paneles solares ($):
              </p>
              <input
                className="solarCalcInputElement interInput"
                type="tel"
                pattern="[0-9]+([\.,][0-9]{0,2})?"
                value={panelCost ? panelCost : ""}
                onChange={(e) =>
                  setPanelCost(
                    e.target.validity.valid ? e.target.value : panelCost
                  )
                }
              />
            </div>
            <p className="solarCalcTxtElement energySavingTxt">
              Tiempo de retorno de inversión:
              <span className="solarCalcTxtElementSpan interSpan">
                {(
                  panelCost /
                    ((12 * cost * solarPanelQuantity * solarPanel[1].power) /
                      minPower) || 0
                ).toFixed(1) + " años"}
              </span>
            </p>
          </div>

          <div className="changePanelCont">
            <ChangePanel action={previousPage}>Atrás</ChangePanel>
          </div>
        </div>
      ) : null}

      <SolarInfo />
    </>
  );
};

export default SolarCalcInter;
