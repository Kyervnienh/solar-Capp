import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  MapContainer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerIcon } from "./react-leaflet-icon.js";
import "./index.css";
import TitleSectionCalc from "../TitleSectionCalc/index.js";
import ChangePanel from "../ChangePanel/index.js";

const SelectPosition = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return null;
};

const Map = (props) => {
  const NASA_API_URL = `https://power.larc.nasa.gov/api/temporal/monthly/point?start=2020&end=2021&latitude=${props.position.lat}&longitude=${props.position.lng}&community=re&parameters=ALLSKY_SFC_SW_DWN&format=json&user=Kevin&time-standard=lst"`;

  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });

  const action = (e) => {
    props.setIrradiance(0);
    fetch(NASA_API_URL, {})
      .then((response) => {
        return response.json();
      })
      .then((irradiance) => {
        props.setIrradiance({ ...irradiance });
      });

    e.preventDefault();
    props.setPanel(props.panels[1]);
    window.scrollTo({
      left: 0,
      top: 90,
      behavior: "smooth",
    });
  };

  return (
    <div className="solarCalcContainer">
      <TitleSectionCalc>Selecciona tu ubicación</TitleSectionCalc>
      <MapContainer center={props.position} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SelectPosition setPosition={props.setPosition} />
        <Marker position={props.position} icon={MarkerIcon}>
          <Popup>
            <pre>
              {"Latitude: " +
                props.position.lat.toFixed(2) +
                ", Longitude: " +
                props.position.lng.toFixed(2)}
            </pre>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="changePanelMap">
        <ChangePanel action={action}>Siguiente</ChangePanel>
      </div>
      <p className="userDataUse">
        * La información proporcionada por tu ubicación no se guarda en nuestros
        servidores, se usa única y exclusivamente para los cálculos
        correspondientes realizados por esta herramienta.
      </p>
    </div>
  );
};

export default Map;
