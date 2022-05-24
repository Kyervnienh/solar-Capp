import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './pages/Home';
import SolarCalcAut from './pages/calculadora-solar-autonoma';
import SolarCalcInter from './pages/calculadora-solar-interconectado';
import AditionalInfo from './pages/informacion-adicional';
import HowTo from './pages/como-funciona';
import SolarCalc from './pages/calculadora solar';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculadora-solar' element={<SolarCalc />} />
          <Route path='/calculadora-solar/sistema-autonomo' element={<SolarCalcAut />} />
          <Route path='/calculadora-solar/sistema-interconectado' element={<SolarCalcInter />} />
          <Route path='/informacion-adicional' element={<AditionalInfo />} />
          <Route path='/como-funciona' element={<HowTo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
