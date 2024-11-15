import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import Historico from './componentes/left/historico';
import Roteiro from './componentes/left/roteiro';
import Chat from './componentes/right/chat';
import Message from './componentes/right/message';
import Forms from './componentes/form/forms';
import Modal from './componentes/form/modal';
import { obterHistoricos } from './endPoints/historicoClient';
import { obterRoteiro } from './endPoints/roteiroClient';

const App = () => {
  const [historicos, setHistoricos] = useState([]);
  const [selectedRoteiro, setSelectedRoteiro] = useState(null);
  const [formData, setFormData] = useState(null);
  const [geminiResponse, setGeminiResponse] = useState(null);
  const [showDefaultMessage, setShowDefaultMessage] = useState(true);

  useEffect(() => {
    const exibeHistoricos = async () => {
      try {
        const data = await obterHistoricos();
        const sortedData = data.sort((a, b) => new Date(b.dt_exeo) - new Date(a.dt_exeo));
        setHistoricos(sortedData);
      } catch (error) {
        console.error('Erro ao buscar históricos:', error);
      }
    };

    exibeHistoricos();
  }, []);

  const exibeRoteiro = async (historico) => {
    console.log('Requisição para obter roteiro com id_historico:', historico.id_historico);
    try {
      const roteiro = await obterRoteiro(historico.id_historico);
      console.log('Resposta do obterRoteiro:', roteiro);
      setSelectedRoteiro(roteiro);
      setGeminiResponse(roteiro[0].res_message); // Atualize o estado geminiResponse com res_message
      setShowDefaultMessage(false);
    } catch (error) {
      console.error('Erro ao buscar roteiro:', error);
    }
  };

  const geraHistorico = ({ formData, geminiResponse }) => {
      setFormData(formData);
      geraRoteiro(geminiResponse);
  };
  
  const geraRoteiro = (newResponse) => {
      setGeminiResponse(newResponse);
      setShowDefaultMessage(false);
  };

  return (
    <div>
      <div className="row g-0">
        <Historico>
          <div style={{ maxHeight: '300px', overflowY: 'auto',}}>
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
                  onClick={() => exibeRoteiro(historico)}
                />
              );
            })}
          </div>
        </Historico>

        <Chat formData={formData} geminiResponse={geminiResponse} onUpdateGeminiResponse={geraRoteiro}>
          {showDefaultMessage && (
            <Message dtEnvio="2024-06-12 14:49:12" owner="trevor">
              Olá, eu sou o Trevor, seu assistente de viagem personalizado e vou te ajudar a ter um roteiro de viagem inesquecível. Preencha o formulário para que eu crie seu roteiro!
            </Message>
          )}
        </Chat>

        <Modal>
          <Forms onFormSubmit={geraHistorico} />
        </Modal>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('main'));
root.render(<App />);