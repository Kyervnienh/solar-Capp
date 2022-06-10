import React from "react";
import Accordion from "../../components/Accordion";
import "./index.css";

const AditionalInfo = () => {

    const info = [
        {
            title: "¿Qué es una instalación solar fotovoltaica autónoma?",
            text: "Una instalación solar fotovoltaica autónoma o aislada es aquella que está en funcionamiento mediante baterías alimentadas por paneles solares. Este tipo de instalación se suele implementar cuando el acceso a la energía eléctrica es escasa o solo se quiere depender de la energía solar."
        },
        {
            title: "¿Qué es una instalación solar fotovoltaica interconectada a la red?",
            text: "Este tipo de instalación se conecta a la red del proveedor de electricidad de forma que se consume energía tanto de los paneles solares como de la red eléctrica, cuando los paneles no generan energía, esta se consume de la red eléctrica y cuando se genera energía en exceso o no se está consumiendo, la energía de los paneles se inyecta a la red eléctrica."
        },
        {
            title: "Diferencias entre un sistema autónomo y uno interconectado a la red",
            text: "Un sistema interconectado no necesita baterías lo que reduce en gran medida el costo de la instalación y solo se utiliza para reducir el consumo eléctrico, mientras que el sistema autonomo cuenta con baterías para cubrir por completo el consumo eléctrico y se diseña para suministrar energía incluso cuando no hay luz solar, este tipo de instalación suele ser más cara."
        },
        {
            title: "¿Cómo calcular mi consumo eléctrico?",
            text: "Para calcular tu consumo eléctrico debes multiplicar la potencia (watts) de cada aparato eléctrico por las horas de uso diario, al final se suma el valor de cada aparato, se multiplica por 30 días y se divide entre 1000. Por ejemplo, para calcular el consumo eléctrico mensual de 2 cargadores de celular de 10 W con 3 horas de uso diario y 1 computadora de 250 W con 4 horas de uso diario se haría lo siguiente: 10 W x 3 horas de cada cargador y 250 W x 4 horas de la computadora, se obtiene 30 Wh de cada cargador y 1000 Wh de la computadora, sumamos y obtenemos 1060 Wh, multiplicamos por 30 y dividimos entre 1000, con lo que obtenemos que el consumo mensual es de 31.8 kWh."
        },
        {
            title: "Conexión en serie vs conexión en paralelo",
            text: "La conexión en serie sirve para incrementar el voltaje de la instalación sin incrementar la corriente, mientras que en la conexión en paralelo incrementa la corriente, pero sin incrementar el voltaje, para aprender a realizar este tipo de conexión se puede apoyar de un diagrama en internet o mediante un profesional."
        },
        {
            title: "¿Cómo se utiliza la información de mi ubicación?",
            text: "La ubicación se usa única y exclusivamente para obtener la irradiancia solar en la ubicación seleccionada de los datos de la NASA Prediction Of Worldwide Energy Resources y así realizar los calculos correspondientes. Los datos de ubicación no se almacenan en nuestros servidores ni se les da un uso ajeno a lo indicado."
        },
        {
            title: "Al hacer el calculo para un sistema interconectado obtuve un valor negativo",
            text: "Cuando la calculadora arroja un resultado negativo en el sistema interconectado a la red significa que su sistema es capaz de suplir el total de la demanda eléctrica y habría un exceso en la generación."
        }
    ]


    return (
        <div className="aditionalInfoCont">
            <h3 className="solarCalcTitle">Información adicional</h3>
            <Accordion info={info} />
        </div>
    )
}

export default AditionalInfo;