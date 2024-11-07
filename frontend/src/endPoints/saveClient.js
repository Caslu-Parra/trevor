import axios from 'axios';

export async function saveRoteiro(roteiroData) { //log_roteiro
  try {
    const res = await axios.post('/roteiros/salvar', roteiroData);
    return res.data;
  } catch (error) {
    console.error('Erro ao salvar o roteiro:', error);
    throw error;
  }
}

export async function saveHistorico(historicoData) { //historico
  try {
    const res = await axios.post('/historicos/salvar', historicoData);
    return res.data;
  } catch (error) {
    console.error('Erro ao salvar o histórico:', error);
    throw error;
  }
}