import axios from 'axios';

export async function saveLogData(logData) {
  try {
    const res = await axios.post('/saveLog', logData);
    return res.data;
  } catch (error) {
    console.error('Erro ao salvar o log:', error);
    throw error;
  }
}