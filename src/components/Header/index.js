import React, { useState } from "react";
import { ReactComponent as Logo } from "./SolarCAPP-logo2.svg";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {

    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <>
            <header className="header">
                <Link to="/"><Logo className="logo" /></Link>

                <span className="icon-menu" id="btn-menu" onClick={toggle}><i className="fa-solid fa-bars"></i></span>
                <div className={show ? "nav show" : "nav"}>
                <ul className="menuHeader">
                    <li><Link className="menuLink" to="/" onClick={toggle}>Inicio</Link></li>
                    <li><Link className="menuLink" to="/calculadora-solar-autonomo" onClick={toggle}>Calculadora Solar</Link></li>
                    <li><Link className="menuLink" to="/como-funciona" onClick={toggle}>¿Cómo funciona?</Link></li>
                    <li><Link className="menuLink" to="/informacion-adicional" onClick={toggle}>Información adicional</Link></li>
                </ul>
                </div>
            </header>
        </>
    )
}

export default Header;