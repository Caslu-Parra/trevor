const express = require('express')
const app = express()
app.use(express.json())

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))

app.get('/hello-world', (req, res) => {
    res.send({ 'msg': 'Hello world' })
})