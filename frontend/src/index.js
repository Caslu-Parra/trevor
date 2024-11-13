import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import Historico from './componentes/left/historico';
import Roteiro from './componentes/left/roteiro';
import Chat from './componentes/right/chat';
import Message from './componentes/right/message';
import Forms from './componentes/form/forms';
import Modal from './componentes/form/modal';
import DataComponent from './componentes/DataComponent';
import HistoricosComponent from './componentes/HistoricosComponent';

const App = () => {
  const [historicos, setHistoricos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoteiro, setSelectedRoteiro] = useState(null);
  const [formData, setFormData] = useState(null); // Estado para armazenar o formData
  const [geminiResponse, setGeminiResponse] = useState(null); // Estado para armazenar a resposta do Gemini
  const [idHistorico, setIdHistorico] = useState(13);

  useEffect(() => {
    async function fetchHistoricos() {
      try {
        const response = await fetch('/historicos');
        const data = await response.json();

        const sortedHistoricos = data.sort((a, b) => new Date(b.dt_exeo) - new Date(a.dt_exeo));
        setHistoricos(sortedHistoricos);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os históricos:', error);
        setLoading(false);
      }
    }
    fetchHistoricos();
  }, []);

  const handleRoteiroClick = (roteiro) => {
    setSelectedRoteiro(roteiro);
  };

  const handleFormSubmit = ({ formData, geminiResponse }) => {
    setFormData(formData);
    setGeminiResponse(geminiResponse);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div className="row g-0">
        <Historico>
          <div 
            style={{
              maxHeight: '300px',
              overflowY: 'auto',
            }}
          >
            {historicos.map((historico, index) => {
              const formattedDate = new Date(historico.dt_exeo).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <Roteiro
                  key={index}
                  title={historico.nome_destino}
                  img='https://bootdey.com/img/Content/avatar/avatar5.png'
                  data={formattedDate}
                  onClick={() => handleRoteiroClick(historico)}
                />
              );
            })}
          </div>
        </Historico>

        <Chat formData={formData} geminiResponse={geminiResponse}>
          <Message dtEnvio="2024-06-12 14:49:12" owner="trevor">
            Olá, eu sou o Trevor, seu assistente de viagem personalizado e vou te ajudar a ter um roteiro de viagem inesquecível. Preencha o formulário para que eu crie seu roteiro!
          </Message>
        </Chat>

        <Modal>
          <Forms onFormSubmit={handleFormSubmit} />
        </Modal>
      </div>
      <hr />
      <DataComponent />
      <HistoricosComponent idHistorico={idHistorico} />
    </div>
  );
};

const root = createRoot(document.getElementById('main'));
root.render(<App />);
