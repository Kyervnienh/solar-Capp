import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const InfoCalc = () => {


    return (
        <div className="infoCalcContainer">
            <div className="infoCalcTitleCont">
                <h5 className="infoCalcTitle">¿Qué es una calculadora solar?</h5>
                <div className="infoCalcLine"></div>
            </div>
            <div className="infoCalcInfo">
                <div className="infoCalcTxtCont">
                    <p className="infoCalcTxt">Una calculadora solar te permite conocer la cantidad de paneles solares, baterías y la
                        capacidad del inversornecesarios para tu instalación.<br /><br />

                        Te puedes dar una idea general de lo que costaría una instalación de este tipo y el ahorro esperado.<br /><br />

                        Con esta heramienta podrás hacer el calculo y conocer los elementos necesarios para una instalación solar autónoma
                        y una instalación interconectada a la red.  </p>
                    <Link to="/como-funciona" className='button infoCalcButton'>¿Cómo funciona?
                        <i className="buttonIcon infoCalcButtonIcon fa-solid fa-angles-right" /></Link>
                </div>

                <img alt="panel-bateria-inversor" src="https://images.pexels.com/photos/3400813/pexels-photo-3400813.jpeg"
                    className="infoCalcImg" />
            </div>
        </div>
    )
}

export default InfoCalc;