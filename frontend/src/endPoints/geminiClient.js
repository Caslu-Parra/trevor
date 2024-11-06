import axios from 'axios';

export async function getGeminiResponse(prompt) {
  const url = '/chatbot';
  try {
    console.log('URL da requisição ao Gemini:', url);
    const res = await axios.post(url, { text: prompt });
    return res.data;
  } catch (error) {
    console.error('Erro ao se conectar ao chatbot:', error);
    throw error;
  }
}