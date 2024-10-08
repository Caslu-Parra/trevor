import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< Updated upstream
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
    <div class="row g-0">
        <Historico>
            <Roteiro title='Vanessa Tucker' img='https://bootdey.com/img/Content/avatar/avatar5.png' data='2024-06-12 07:10:56' />
            <Roteiro title='William Harris' img='https://bootdey.com/img/Content/avatar/avatar2.png' data='2024-07-11 09:20:15' />
            <Roteiro title='Fiona Green' img='https://bootdey.com/img/Content/avatar/avatar3.png' data='2023-10-01 15:35:37' />
        </Historico>
        <Chat>
            <Message dtEnvio='2024-06-12 14:49:12' owner='trevor'>Olá, eu sou o Trevor, seu assistente de viagem personalizado e vou te ajudar a ter um roteiro de viagem inesquecível. Preencha o formulário para que eu crie seu roteiro!</Message>
        </Chat>
        <Modal>
            <Forms/>
        </Modal>
    </div>
);
>>>>>>> Stashed changes
