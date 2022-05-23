import React from "react";
import "./index.css";
import selectCalc from "./images/select-calc.jpg";
import map from "./images/map.jpg";
import consum from "./images/consum.jpg";
import selectPanel from "./images/select-panel.jpg";
import solarPanels from "./images/solar-panels.jpg";
import selectBattery from "./images/select-battery.jpg";
import solarBatteries from "./images/solar-batteries.jpg";
import review from "./images/review.jpg";

const HowTo = () => {

    return (
        <div className="howToContainer">
            <h3 className="solarCalcTitle">¿Cómo funciona la calculadora solar?</h3>
            <p className="howToTxt">Hay dos tipos de calculadoras solares, para un sistema autónomo y uno interconectado a la red, por defecto
                se encuentra seleccionado la calculadora para el sistema autónomo, si se desea hacer el calculo para un sistema interconectado a
                la red debemos seleccionarlo en el botón que se encuentra en la parte superior.</p>
            <img src={selectCalc} className="howToImg selectCalcImg" alt="select calc button" />
            <p className="howToTxt">Una vez seleccionada la calculadora solar debemos seleccionar nuestra ubicación en el mapa y darle al
                botón "siguiente".</p>
            <img src={map} className="howToImg mapImg" alt="map section" />
            <p className="howToTxt">Después de seleccionar la ubicación debemos introducir nuestro consumo eléctrico mensual que se encuentra
                en el recibo de luz, en caso de no contar con un recibo de luz se debe realizar el cálculo correspondiente e introducir el valor,
                en la sección <a href="./informacion-adicional">información adicional</a> se encuentra como realizarlo, también debemos indicar
                si tenemos muchos aparatos eléctricos o aire acondicionado y pulsar "siguiente.</p>
            <img src={consum} className="howToImg consumImg" alt="consum section" />
            <h5 className="howToCalc">Calculadora solar sistema autónomo</h5>
            <p className="howToTxt">Para el sistema autónomo se nos indicarán el voltaje y potencia necesaria del sistema fotovoltaico
                que debemos implementar, a continuación debemos seleccionar un panel solar o introducir los datos de un panel solar propio o
                uno que se encuentre en el mercado (e.j. mercadolibre).</p>
            <img src={selectPanel} className="howToImg selectPanel" alt="select panel section" />
            <p className="howToTxt">Una vez hecho lo anterior pulsamos "calcular  los paneles solares necesarios" y se nos mostrará la
                cantidad de paneles solares necesarios a <a href="./informacion-adicional">conectar en serie y paralelo</a>.</p>
            <img src={solarPanels} className="howToImg solarPanels" alt="solar panels section" />
            <p className="howToTxt">En la siguiente sección se nos indica el voltaje y la capacidad del banco de baterías diseñado para
                2 días de autonomía (días que se podria suministrar energía sin recibir luz solar), seleccionamos una batería o introducimos
                los datos de una batería propia o del mercado.</p>
            <img src={selectBattery} className="howToImg selectBattery" alt="select battery section" />
            <p className="howToTxt">Pulsamos "calcular las baterías necesarias" y se nos mostrará la cantidad de baterías necesarias, así como
                las caracteristicas del inversor y regulador de carga necesarios.</p>
            <img src={solarBatteries} className="howToImg solarBatteries" alt="solar batteries info section" />
            <p className="howToTxt">Por último se tiene la sección "resumen" que nos indica los elementos calculados para la instalación que
                acabamos de diseñar.</p>
            <img src={review} className="howToImg review" alt="review section" />
        </div>
    )
}

export default HowTo;