import axios from 'axios';

export async function obterRoteiro(idHistorico) {
  try {
    const response = await axios.get(`/roteiros/${idHistorico}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar históricos:', error);
    throw error;
  }
}