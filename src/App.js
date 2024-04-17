import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  // Valor do estado/variavel e função que atualiza ela 
  const [endereco, setEndereco] = useState({});

  function manipularEndereco (event) {

    const cep = event.target.value

    setEndereco({
      cep
    })

    if (cep && cep.length === 8){
      // obter o cep´
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((dados) => {
        setEndereco(enderecoAntigo => {
          return {
          ...enderecoAntigo,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
          }
         })
      })

    }

  }

  return (
    <div className="App">
      <header className="App-header">             {/*método para alterar o valor do estado pelo input, o onChange é uma função que é chamada sempre quando esse input mudar*/}
        <input type='number' placeholder='Digite o cep' onChange={manipularEndereco}></input>
         <ul>
          <li>CEP: {endereco.cep}</li>   
          <li>Bairro: {endereco.bairro}</li>  
          <li>Cidade: {endereco.cidade}</li>  
          <li>Estado: {endereco.estado}</li>  
         </ul>
      </header>
    </div>
  );
}

export default App;
