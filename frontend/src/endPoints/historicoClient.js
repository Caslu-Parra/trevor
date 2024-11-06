import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HistoricosComponent() {
  const [historicos, setHistoricos] = useState([]);

  useEffect(() => {
    axios.get('/historicos')
      .then(response => {
        setHistoricos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar históricos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Históricos</h2>
      <pre>{JSON.stringify(historicos, null, 2)}</pre>
    </div>
  );
}

export default HistoricosComponent;