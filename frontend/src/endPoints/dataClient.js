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

  // Pegar id_roteiro de todos os objetos
  const idRoteiros = data.map(item => item.id_roteiro);

  // Pegar id_roteiro de um objeto específico (por exemplo, o primeiro objeto)
  const idRoteiroPrimeiroObjeto = data.length > 0 ? data[0].id_roteiro : null;

  // Pegar res_message quando id_exeo for 6
  const resMessageIdExeo6 = data.find(item => item.id_exeo === 6)?.res_message || 'Não encontrado';

  // // Pegar id_roteiro de todos os objetos
  // const idRoteiros = data.map(function(item) {
  //   return item.id_roteiro;
  // });
  
  // // Pegar id_roteiro de um objeto específico (por exemplo, o primeiro objeto)
  // const idRoteiroPrimeiroObjeto = data.length > 0 ? data[0].id_roteiro : null;
  
  // // Pegar res_message quando id_exeo for 6
  // const resMessageIdExeo6 = (function() {
  //   for (var i = 0; i < data.length; i++) {
  //     if (data[i].id_exeo === 6) {
  //       return data[i].res_message;
  //     }
  //   }
  //   return 'Não encontrado';
  // })();

  return (
    <div>
      <h2>Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h3>id_roteiro de todos os objetos</h3>
      <pre>{JSON.stringify(idRoteiros, null, 2)}</pre>

      <h3>id_roteiro do primeiro objeto</h3>
      <pre>{JSON.stringify(idRoteiroPrimeiroObjeto, null, 2)}</pre>

      <h3>res_message quando id_exeo for 6</h3>
      <pre>{JSON.stringify(resMessageIdExeo6, null, 2)}</pre>
    </div>
  );
}

export default DataComponent;