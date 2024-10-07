// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaPrincipal from './componentes/TelaPrincipal'; 
import TelaHistorico from './componentes/TelaHistorico'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/historico" element={<TelaHistorico />} />
      </Routes>
    </Router>
  );
};

export default App;
