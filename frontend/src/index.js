import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Historico from './componentes/left/historico';
import Roteiro from './componentes/left/roteiro';
import Chat from './componentes/right/chat';
import Message from './componentes/right/message';
import Forms from './componentes/form/forms';
import Modal from './componentes/form/modal';
//endpoints
import DataComponent from './endPoints/dataClient';
import HistoricosComponent from './endPoints/roteiroClient';
// import ChatbotComponent from './endPoints/geminiClient';

function App() {
    const [formData, setFormData] = useState(null);
    const [geminiResponse, setGeminiResponse] = useState(null);

    const handleFormSubmit = ({ formData, geminiResponse }) => {
        setFormData(formData);
        setGeminiResponse(geminiResponse);
    };

    return (
        <div>
            <div className="row g-0">
                <Historico>
                    <Roteiro title='Lisboa - 13 dias' img='https://bootdey.com/img/Content/avatar/avatar5.png' data='2024-06-12 07:10:56' />
                    <Roteiro title='Paris, Barcelona - 20 dias' img='https://bootdey.com/img/Content/avatar/avatar2.png' data='2024-07-11 09:20:15' />
                    <Roteiro title='Orlando, Miami, Tampa - 10 dias' img='https://bootdey.com/img/Content/avatar/avatar3.png' data='2023-10-01 15:35:37' />
                </Historico>
                <Chat formData={formData} geminiResponse={geminiResponse}>
                    <Message dtEnvio='2024-06-12 14:49:12' owner='trevor'>Olá, eu sou o Trevor, seu assistente de viagem personalizado e vou te ajudar a ter um roteiro de viagem inesquecível. Preencha o formulário para que eu crie seu roteiro!</Message>
                </Chat>
                <Modal>
                    <Forms onFormSubmit={handleFormSubmit} />
                </Modal>
            </div>
            {/* provisorio para testes */}
            <hr></hr>
            {/* <ChatbotComponent/> */}
            <DataComponent/>
            <HistoricosComponent/>
        </div>
    );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);