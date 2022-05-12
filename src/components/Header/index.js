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

                <span class="icon-menu" id="btn-menu" onClick={toggle}><i class="fa-solid fa-bars"></i></span>
                <div className={show ? "nav show" : "nav"}>
                <ul className="menuHeader">
                    <li><Link className="menuLink" to="/">Inicio</Link></li>
                    <li><Link className="menuLink" to="/calculadora-solar-autonoma">Calculadora Solar</Link></li>
                    <li><Link className="menuLink" to="/como-funciona">¿Cómo funciona?</Link></li>
                    <li><Link className="menuLink" to="/informacion-adicional">Información adicional</Link></li>
                </ul>
                </div>
            </header>
        </>
    )
}

export default Header;