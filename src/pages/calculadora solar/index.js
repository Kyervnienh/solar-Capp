import React from "react";
import { Link } from "react-router-dom";
import SolarInfo from "../../components/SolarInfo";
import "./index.css";

const SolarCalc = () => {

    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });

    return (
        <div className="selectSolarCalcPage">
            <h3 className="solarCalcTitle">Selecciona el sistema solar que deseas implementar</h3>
            <div className="selectSolarSystemCont">
                <Link className="selectSolarSystem" to="/calculadora-solar/sistema-autonomo" >Sistema autónomo</Link>
                <p className="selectSolarSystemO">o</p>
                <Link className="selectSolarSystem" to="/calculadora-solar/sistema-interconectado" >Sistema interconectado</Link>
            </div>
            <SolarInfo />
        </div>
    )
}

export default SolarCalc;