// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001; // Ou a porta que você escolheu

app.use(cors());
app.use(express.json());

// Simulação de um banco de dados em memória
let roteiros = [];
let idCounter = 1; // Contador para simular IDs únicos

// Rota para o endpoint raiz
app.get('/', (req, res) => {
  res.send('Servidor rodando! Acesse /api/roteiros para criar um roteiro ou /api/historico para ver o histórico.');
});

// Rota para criar um novo roteiro
app.post('/api/roteiros', (req, res) => {
  const { cidade, dias, resultado } = req.body;
  
  // Verifica se todos os dados necessários foram enviados
  if (!cidade || !dias || !resultado) {
    return res.status(400).json({ message: 'Dados incompletos' });
  }

  // Cria um novo roteiro
  const novoRoteiro = {
    id: idCounter++,
    cidade,
    dias,
    resultado,
    data_processamento: new Date()
  };

  // Adiciona o novo roteiro ao array
  roteiros.push(novoRoteiro);
  res.status(201).json(novoRoteiro);
});

// Rota para obter o histórico de roteiros
app.get('/api/historico', (req, res) => {
  // Retorna os últimos 10 roteiros gerados
  const historico = roteiros.slice(-10).map(({ cidade, dias, resultado, data_processamento }) => ({
    cidade,
    dias,
    resultado,
    data_processamento
  }));
  res.json(historico);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
