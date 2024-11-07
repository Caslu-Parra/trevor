import axios from 'axios';

export async function fetchRoteiros(idHistorico) {
  try {
    const response = await axios.get(`/roteiros/${idHistorico}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar históricos:', error);
    throw error;
  }
}