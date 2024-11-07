// DataComponent.js
import React, { useEffect, useState } from 'react';
import { fetchHistoricos } from '../endPoints/historicoClient';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHistoricos()
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  // Pegar id_historico de todos os objetos
  const idHistoricos = data.map(item => item.id_historico);

  // Pegar id_historico de um objeto específico (por exemplo, o primeiro objeto)
  const idHistoricoPrimeiroObjeto = data.length > 0 ? data[0].id_historico : null;

  // Pegar nome_destino quando id_exeo for 6
  const nomeDestinoIdExeo6 = data.find(item => item.id_exeo === 6)?.nome_destino || 'Não encontrado';

  return (
    <div>
      <h2>Left</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h3>id_historico de todos os objetos</h3>
      <pre>{JSON.stringify(idHistoricos, null, 2)}</pre>

      <h3>id_historico do primeiro objeto</h3>
      <pre>{JSON.stringify(idHistoricoPrimeiroObjeto, null, 2)}</pre>

      <h3>nome_destino quando id_exeo for 6</h3>
      <pre>{JSON.stringify(nomeDestinoIdExeo6, null, 2)}</pre>
    </div>
  );
}

export default DataComponent;