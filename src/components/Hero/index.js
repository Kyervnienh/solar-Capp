import React from 'react';
import './index.css';

const Hero = () => {


    return (
        <div className='hero'>
            <h1 className='heroTitle'>Calcula los paneles solares necesarios para tu hogar</h1>
            <p className='heroTxt'>Solo necesitas tu recibo de luz o conocer tu consumo eléctrico para realizar el calculo de una forma rápida y sencilla.</p>
            <a className='heroButton'>Ir a la calculadora <i class="heroButtonIcon fa-solid fa-angles-right" /></a>
        </div>
    );
}

export default Hero;