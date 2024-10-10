import React from 'react';
import './App.css'; 
import DatePicker from './componentes/DatePicker';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <div className="App">
            <h1>Escolha a data de sua viagem</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <DatePicker id="data-ida">Escolha a data de ida:</DatePicker>
                </div>
                <div className="grid-item">
                    <DatePicker id="data-volta">Escolha a data de volta:</DatePicker>
                </div>
                <div className="observacao-container">
    <label htmlFor="observacao">Observações:</label>
    <textarea
        id="observacao"
        name="observacao"
        className="observacao-textarea"
        placeholder="Deixe seu comentário aqui..."
    />
</div>

            </div>
        </div>
    );
}

export default App; 
