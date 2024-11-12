// HistoricosComponent.js
import React, { useEffect, useState } from 'react';
import { obterRoteiros } from '../endPoints/roteiroClient';

function HistoricosComponent({ idHistorico }) {
  const [historicos, setHistoricos] = useState([]);

  useEffect(() => {
    if (idHistorico) {
      obterRoteiros(idHistorico)
        .then(responseData => {
          setHistoricos(responseData);
        })
        .catch(error => {
          console.error('Erro ao buscar históricos:', error);
        });
    }
  }, [idHistorico]);

  return (
    <div>
      <h2>Roteiro</h2>
      <pre>{JSON.stringify(historicos, null, 2)}</pre>
    </div>
  );
}

export default HistoricosComponent;