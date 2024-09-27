import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InputText from './componentes/InputText';
import DatePicker from './componentes/DatePicker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <InputText id="input-text">Insira seu destino</InputText>
        <DatePicker id="start-date">Insira sua data de início</DatePicker>
        <DatePicker id="end-date">Insira sua data de saída</DatePicker>
    </div>
);