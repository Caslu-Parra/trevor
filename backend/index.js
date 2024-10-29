process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('dotenv').config();
const express = require('express');
const dbService = require('./dbService');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Executando na porta: ${port}`));

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