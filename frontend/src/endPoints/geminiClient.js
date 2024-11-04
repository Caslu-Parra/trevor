import React, { useState } from 'react';
import axios from 'axios';

function ChatbotComponent() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/chatbot', { text: prompt });
      setResponse(res.data);
    } catch (error) {
      console.error('Erro ao se conectar ao chatbot:', error);
    }
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Digite seu prompt"
        />
        <button type="submit">Enviar</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default ChatbotComponent;