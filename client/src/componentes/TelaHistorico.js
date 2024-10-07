// src/componentes/TelaHistorico.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TelaHistorico = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/historico');
        setHistorico(response.data);
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        alert('Houve um erro ao buscar o histórico. Tente novamente mais tarde.');
      }
    };

    fetchHistorico();
  }, []);

  return (
    <div>
      <h1>Histórico de Roteiros</h1>
      <table>
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Quantidade de Dias</th>
            <th>Data de Geração</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((item, index) => (
            <tr key={index}>
              <td>{item.cidade}</td>
              <td>{item.dias}</td>
              <td>{new Date(item.data_processamento).toLocaleString()}</td>
              <td>
                <button onClick={() => alert(item.resultado)}>Ver Roteiro</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TelaHistorico;
