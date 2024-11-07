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

async function obterHistoricos() {
  try {
    const sqlResult = await client.query(`SELECT rot.id_exeo, rot.dt_exeo, rot.id_historico, hst.nome_destino
                                            FROM log_roteiro rot LEFT JOIN historico hst ON rot.id_historico = hst.id`);
    return sqlResult.rows;
  } catch (err) { throw err; }
}

async function obterRoteiro(id_historico) {
  try {
    const sqlResult = await client.query(`SELECT rot.id_exeo, rot.res_message, rot.id_historico, hst.nome_destino
                                            FROM log_roteiro rot LEFT JOIN historico hst ON rot.id_historico = hst.id
                                            WHERE rot.id_historico = ${id_historico}`);
    return sqlResult.rows;
  } catch (err) { throw err; }
}

async function salvarRoteiro(roteiro) {
  try {
    const query = 'INSERT INTO log_roteiro (res_message, dt_exeo, id_historico) VALUES ($1, $2, $3) RETURNING *';
    const valores = [roteiro.msg, roteiro.dt_exeo, roteiro.id_historico];

    const sqlResult = await client.query(query, valores);
    return sqlResult.rows[0];
  } catch (err) { throw err; }
}

async function salvarHistorico(form) {
  try {
    await client.query('BEGIN');
    const query = `INSERT INTO historico (dt_ida, dt_volta, nome_destino, tipo_viagem, viajando_sozinho, tem_animal, valor_pessoa, obs_viagem, tem_crianca) 
                          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

    const valores = [
      form.dt_ida,
      form.dt_volta,
      form.nome_destino,
      form.tipo_viagem,
      form.viajando_sozinho,
      form.tem_animal,
      form.valor_pessoa,
      form.obs_viagem,
      form.tem_crianca
    ];
    const sqlResult = await client.query(query, valores);
    return sqlResult.rows[0];

  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  }
}

module.exports = {
  obterHistoricos: obterHistoricos, obterRoteiro: obterRoteiro, salvarRoteiro, salvarHistorico
};