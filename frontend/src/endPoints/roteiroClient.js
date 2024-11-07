import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HistoricosComponent({ idHistorico }) {
  const [historicos, setHistoricos] = useState([]);

  useEffect(() => {
    if (idHistorico) {
      axios.get(`/roteiros/${idHistorico}`)
        .then(response => {
          setHistoricos(response.data);
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