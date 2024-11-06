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
  .then(() => console.log('Conexão bem sucedida'))
  .catch(err => console.error('Erro ao se conectar no servidor', err));

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
    const res = await client.query(`SELECT 
                                      log.id_exeo, 
                                      log.dt_exeo, 
                                      log.id_roteiro, 
                                      rot.dt_volta, 
                                      rot.dt_ida,
                                      rot.nome_destino, 
                                      rot.tipo_viagem, 
                                      rot.viajando_sozinho, 
                                      rot.tem_animal, 
                                      rot.valor_pessoa, 
                                      rot.obs_viagem,
                                      rot.tem_crianca
                                    FROM log_exeo log
                                    LEFT JOIN roteiros rot ON log.id_roteiro = rot.id`);
    return res.rows;
  } catch (err) {
    console.error('Não foi possível executar a query', err);
    throw err;
  }
}

async function saveHistorico(logData, roteiroData) {
  try {
    await client.query('BEGIN');
    const roteiroQuery = `INSERT INTO roteiros (dt_ida, dt_volta, nome_destino, tipo_viagem, viajando_sozinho, tem_animal, valor_pessoa, obs_viagem, tem_crianca) 
                          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    const roteiroValues = [
      roteiroData.dt_ida, 
      roteiroData.dt_volta, 
      roteiroData.nome_destino, 
      roteiroData.tipo_viagem, 
      roteiroData.viajando_sozinho, 
      roteiroData.tem_animal, 
      roteiroData.valor_pessoa, 
      roteiroData.obs_viagem, 
      roteiroData.tem_crianca
    ];
    const roteiroResult = await client.query(roteiroQuery, roteiroValues);

    if (logData) {
      const logQuery = 'INSERT INTO log_exeo (res_message, dt_exeo, id_roteiro) VALUES ($1, $2, $3) RETURNING *';
      const logValues = [logData.res_message, logData.dt_exeo, roteiroResult.rows[0].id];
      const logResult = await client.query(logQuery, logValues);
      await client.query('COMMIT');
      return { log: logResult.rows[0], roteiro: roteiroResult.rows[0] };
    } else {
      await client.query('COMMIT');
      return { roteiro: roteiroResult.rows[0] };
    }
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Erro ao salvar os dados', err);
    throw err;
  }
}

async function saveLog(logData) {
  try {
    const logQuery = 'INSERT INTO log_exeo (res_message, dt_exeo, id_roteiro) VALUES ($1, $2, $3) RETURNING *';
    const logValues = [logData.res_message, logData.dt_exeo, logData.id_roteiro];
    const logResult = await client.query(logQuery, logValues);
    return logResult.rows[0];
  } catch (err) {
    console.error('Erro ao salvar o log', err);
    throw err;
  }
}

module.exports = {
  getData,
  getHistoricos,
  saveHistorico,
  saveLog
};