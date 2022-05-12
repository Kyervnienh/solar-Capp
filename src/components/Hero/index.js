import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Hero = () => {


    return (
        <div className='hero'>
            <h1 className='heroTitle'>Calcula los paneles solares necesarios para tu hogar</h1>
            <p className='heroTxt'>Solo necesitas tu recibo de luz o conocer tu consumo eléctrico para realizar el calculo de una forma rápida y sencilla.</p>
            <Link to="/calculadora-solar-autonoma" className='button heroButton'>Ir a la calculadora <i class="buttonIcon heroButtonIcon fa-solid fa-angles-right" /></Link>
        </div>
    );
}

export default Hero;