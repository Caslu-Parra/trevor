import axios from 'axios';

export async function saveData(logData, roteiroData) {
  try {
    const res = await axios.post('/save', { logData, roteiroData });
    return res.data;
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
    throw error;
  }
}

export async function saveLogData(logData) {
  try {
    const res = await axios.post('/saveLog', logData);
    return res.data;
  } catch (error) {
    console.error('Erro ao salvar o log:', error);
    throw error;
  }
}