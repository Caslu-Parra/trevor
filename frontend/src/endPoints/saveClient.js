import React, { useState } from 'react';
import axios from 'axios';

export default function SaveComponent() {
  const [logData, setLogData] = useState({ res_message: '', dt_exeo: '', id_roteiro: '' });
  const [roteiroData, setRoteiroData] = useState({
    dt_volta: '',
    nome_cidade: '',
    nome_pais: '',
    tem_criancas: false,
    tipo_viagem: '',
    viajando_sozinho: false,
    tem_animal: false,
    valor_pessoa: 0,
    obs_viagem: ''
  });
}

export async function saveData(logData, roteiroData) {
  try {
    const res = await axios.post('/save', { logData, roteiroData });
    return res.data;
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
    throw error;
  }
}
