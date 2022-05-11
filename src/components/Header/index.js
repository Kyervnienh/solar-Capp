import React, { useState } from "react";
import { ReactComponent as Logo } from "./SolarCAPP-logo2.svg";
import "./index.css";

const Header = () => {

    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <>
            <header className="header">
                <a href="/"><Logo className="logo" /></a>

                <span class="icon-menu" id="btn-menu" onClick={toggle}><i class="fa-solid fa-bars"></i></span>
                <div className={show ? "nav show" : "nav"}>
                <ul className="menuHeader">
                    <li><a className="menuLink" href="/">Inicio</a></li>
                    <li><a className="menuLink" href="/calculadora-solar">Calculadora Solar</a></li>
                    <li><a className="menuLink" href="/como-funciona">¿Cómo funciona?</a></li>
                    <li><a className="menuLink" href="/informacion-adicional">Información adicional</a></li>
                </ul>
                </div>
            </header>
        </>
    )
}

export default Header;