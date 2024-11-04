const { Client } = require('pg');
const fs = require('fs');

const connectionString = process.env.DB_URI;
const caCertPath = process.env.CA_CERT_PATH;

const client = new Client({
  connectionString: connectionString,
  ssl: {
    ca: fs.readFileSync(caCertPath)
  }
});

client.connect()
  .then(() => console.log('Conexão bem sucessida'))
  .catch(err => console.error('Erro ao se concetar no servidor', err));

async function getData() {
  try {
    const res = await client.query('SELECT * FROM log_exeo');
    return res.rows;
  } catch (err) {
    console.error('Não foi possível executar a query', err);
    throw err;
  }
}

async function getHistoricos() {
  try {
    const res = await client.query(`SELECT log.id_exeo, log.dt_exeo, log.id_roteiro, rot.nome_pais, rot.nome_cidadade
                                      FROM log_exeo log
                                 LEFT JOIN roteiros rot ON log.id_roteiro = rot.id`);
    return res.rows;
  } catch (err) {
    console.error('Não foi possível executar a query', err);
    throw err;
  }
}

module.exports = {
  getData, getHistoricos
};