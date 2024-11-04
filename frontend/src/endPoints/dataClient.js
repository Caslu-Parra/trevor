import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div>
      <h2>Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataComponent;