import axios from 'axios';

export async function fetchHistoricos() {
  try {
    const response = await axios.get('/historicos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}