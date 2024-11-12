import axios from 'axios';

/**
 * Função para salvar o histórico no servidor.
 * @param {Object} historicoData - Dados do histórico a serem salvos.
 * @returns {Object} - Dados do histórico salvo.
 */
export async function saveHistorico(historicoData) {
  try {
    const response = await axios.post('/historicos/salvar', historicoData);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar o histórico:', error);
    throw error;
  }
}

/**
 * Função para salvar o roteiro no servidor.
 * @param {Object} roteiroData - Dados do roteiro a serem salvos.
 * @returns {Object} - Dados do roteiro salvo.
 */
export async function saveRoteiro(roteiroData) {
  try {
    const response = await axios.post('/roteiros/salvar', roteiroData);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar o roteiro:', error);
    throw error;
  }
}