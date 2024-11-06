process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('dotenv').config();
const express = require('express');
const path = require('path');
const dbService = require('./dbService');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Executando na porta: ${port}`));

// Servir arquivos estáticos do build do React
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/hello-world', (req, res) => {
    res.send({ 'msg': 'Hello world' });
});

app.get('/data', async (req, res) => {
    try {
        const data = await dbService.getData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao se concetar ao servidor SQL' });
    }
});

app.get('/historicos', async (req, res) => {
    try {
        const data = await dbService.getHistoricos();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao se concetar ao servidor SQL' });
    }
});

app.post('/chatbot', async (req, res) => { // Alterado para POST
    const { text } = req.body; // Obtém a pergunta do corpo da requisição
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(text);
        const response = await result.response;
        const generatedText = response.text();
        res.json({ text: generatedText });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao se conectar ao chatbot' });
    }
});

app.post('/save', async (req, res) => {
    const { logData, roteiroData } = req.body; // Obtém os dados do corpo da requisição

    try {
        const savedData = await dbService.saveHistorico(logData, roteiroData);
        res.json(savedData);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar os dados' });
    }
});

// Para qualquer outra rota, sirva o index.html do build do React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});