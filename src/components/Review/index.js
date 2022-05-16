import React from "react";
import TitleSectionCalc from "../TitleSectionCalc";
import ChangePanel from "../ChangePanel";

import "./index.css";

const Review = (props) => {

    const action = (e) => {
        e.preventDefault();
        props.setPanel(props.panels[3]);
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }


    return (
        <>
            <TitleSectionCalc>Resumen</TitleSectionCalc>
            <div className="solarCalcReview">
                <p className="solarCalcTitleElement">Paneles solares</p>
                <p className="solarCalcTxtElement">Cantidad: <span className="solarCalcTxtElementSpan">{7}</span></p>
                <p className="solarCalcTxtElement">Potencia (c/u): <span className="solarCalcTxtElementSpan">{330 + " W"}</span></p>
                <p></p>
                <p className="solarCalcTitleElement">Baterías solares</p>
                <p className="solarCalcTxtElement">Cantidad: <span className="solarCalcTxtElementSpan">{12}</span></p>
                <p className="solarCalcTxtElement">Voltaje (c/u): <span className="solarCalcTxtElementSpan">{24 + " V"}</span></p>
                <p className="solarCalcTxtElement">Capacidad (c/u): <span className="solarCalcTxtElementSpan">{120 + " Ah"}</span></p>
                <p className="solarCalcTitleElement">Inversor</p>
                <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan">{24 + " V"}</span></p>
                <p className="solarCalcTxtElement">Potencia nominal: <span className="solarCalcTxtElementSpan">{2000 + " VA"}</span></p>
                <p></p>
                <p className="solarCalcTitleElement">Regulador de carga</p>
                <p className="solarCalcTxtElement">Voltaje nominal: <span className="solarCalcTxtElementSpan">{24 + " V"}</span></p>
                <p className="solarCalcTxtElement">Intensidad nominal: <span className="solarCalcTxtElementSpan">{80 + " A"}</span></p>
                <p className="solarCalcTxtElement">Potencia de carga: <span className="solarCalcTxtElementSpan">{2000 + " W"}</span></p>
            </div>

            <div className='changePanelReview'>
                <ChangePanel action={action}>Atrás</ChangePanel>
            </div>
        </>
    )
}

export default Review;