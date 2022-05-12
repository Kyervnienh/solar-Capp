import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './pages/Home';
import SolarCalcAut from './pages/calculadora-solar-autonoma';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculadora-solar-autonoma' element={<SolarCalcAut />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
