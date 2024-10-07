// src/componentes/TelaPrincipal.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate

const TelaPrincipal = () => {
  const [cidade, setCidade] = useState('');
  const [dias, setDias] = useState('');
  const [tipoViagem, setTipoViagem] = useState('');
  const [comCrianças, setComCrianças] = useState(false);
  const [sozinho, setSozinho] = useState(false);
  const [comAnimais, setComAnimais] = useState(false);
  const [roteiro, setRoteiro] = useState('');
  
  const navigate = useNavigate(); // Inicializando useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cidade || !dias || !tipoViagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/gerar-roteiro', {
        cidade,
        dias,
        tipoViagem,
        comCrianças,
        sozinho,
        comAnimais
      });
      
      setRoteiro(response.data.roteiro);
    } catch (error) {
      console.error('Erro ao gerar roteiro:', error);
      alert('Houve um erro ao gerar o roteiro. Tente novamente mais tarde.');
    }
  };

  const handleClear = () => {
    // Limpando os estados do formulário
    setCidade('');
    setDias('');
    setTipoViagem('');
    setComCrianças(false);
    setSozinho(false);
    setComAnimais(false);
    setRoteiro('');
  };

  const handleHistorico = () => {
    navigate('/historico'); // Navegando para a tela de histórico
  };

  return (
    <div>
      <h1>Gerar Roteiro de Viagem</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome da Cidade" 
          value={cidade} 
          onChange={(e) => setCidade(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Quantidade de Dias" 
          value={dias} 
          onChange={(e) => setDias(e.target.value)} 
        />
        <select value={tipoViagem} onChange={(e) => setTipoViagem(e.target.value)}>
          <option value="">Selecione o Tipo de Viagem</option>
          <option value="Paisagens Naturais">Paisagens Naturais</option>
          <option value="Gastronomia">Gastronomia</option>
          <option value="Arquitetura">Arquitetura</option>
          <option value="Cultura e Artes">Cultura e Artes</option>
          <option value="Vida Noturna">Vida Noturna</option>
          <option value="Pontos Turísticos Gerais">Pontos Turísticos Gerais</option>
        </select>
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={comCrianças} 
              onChange={() => setComCrianças(!comCrianças)} 
            />
            Viajando com Criança
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={sozinho} 
              onChange={() => setSozinho(!sozinho)} 
            />
            Viajando Sozinho
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={comAnimais} 
              onChange={() => setComAnimais(!comAnimais)} 
            />
            Viajando com Animais de Estimação
          </label>
        </div>
        <button type="submit">Obter Roteiro</button>
        <button type="button" onClick={handleClear}>Limpar Formulário</button> {/* Botão de limpar */}
        <button type="button" onClick={handleHistorico}>Ver Histórico</button> {/* Botão para histórico */}
      </form>
      {roteiro && <div><h2>Roteiro Gerado:</h2><p>{roteiro}</p></div>}
    </div>
  );
};

export default TelaPrincipal;
