import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SolarInfo = () => {

    return (
        <div className="solarInfoCont">
            <div className="solarInfoTitleCont">
                <h5 className="solarInfoTitle">Instalación solar fotovoltaica autónoma vs interconectada a la red</h5>
                <div className="solarInfoLine"></div>
            </div>
            <p className="solarInfoTxt">Una instalación autónoma es aquella que genera toda la energía que se va a consumir y cuenta con 3
                elementos principales:<br /><br />

                <span className="solarInfoTxtList">• Paneles solares</span><br />
                <span className="solarInfoTxtList">• Baterías</span><br />
                <span className="solarInfoTxtList">• Inversor</span><br /><br />

                Mientras que una instalación interconectada a la red es aquella que se hace mediante un contrato con la compañia proveedora
                de electricidad y dónde solo generas una parte de la energía que consumes y posee 2 elementos principales:<br /><br />

                <span className="solarInfoTxtList">• Panel o paneles solares</span><br />
                <span className="solarInfoTxtList">• Inversor</span></p>

            <Link to="/informacion-adicional" className='button solarInfoButton'>Más Información
                <i className="buttonIcon solarInfoButtonIcon fa-solid fa-angles-right" /></Link>
        </div>
    )
}

export default SolarInfo;