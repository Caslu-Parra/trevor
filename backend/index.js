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

app.get('/teste', (req, res) => res.json({ 'msg': 'hello world' }));

app.get('/historicos', async (req, res) => {
    try {
        const historico = await dbService.obterHistoricos();
        res.status(200).json(historico);
    } catch (error) {
        res.status(500).json({ err_msg: `${error}` });
    }
});

app.get('/roteiros/:id_historico', async (req, res) => {
    try {
        const roteiro = await dbService.obterRoteiro(req.params.id_historico);
        res.status(200).json(roteiro);
    } catch (error) {
        res.status(500).json({ err_msg: `${error}` });
    }
});

app.post('/roteiros/gerar', async (req, res) => {
    try {
        const { text } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(text);
        const response = await result.response;
        const generatedText = response.text();
        res.json({ text: generatedText });
    } catch (error) {
        res.status(500).json({ err_msg: `${error.errorDetails[0].reason}` });
    }
});

app.post('/roteiros/salvar', async (req, res) => {
    try {
        const savedLogData = await dbService.salvarRoteiro(req.body);
        res.status(201).json(savedLogData);
    } catch (error) {
        res.status(500).json({ err_msg: `${error}` });
    }
});

app.post('/historicos/salvar', async (req, res) => {
    try {
        const savedData = await dbService.salvarHistorico(req.body);
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({ err_msg: `${error}` });
    }
});

// Para qualquer outra rota, sirva o index.html do build do React
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'frontend/build', 'index.html')));