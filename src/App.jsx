import { useState } from 'react';
import CepInput from './components/cepInput';
import AddressInfo from './components/AddressInfo';

function App() {
  const [endereco, setEndereco] = useState({});

  function manipularEndereco(evento) {
    const cep = evento.target.value;

    setEndereco({ cep });

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => setEndereco({
          cep: cep,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Busca CEP</h1>
        <CepInput onCepChange={manipularEndereco} />
        <AddressInfo endereco={endereco} />
      </header>
    </div>
  );
}

export default App;