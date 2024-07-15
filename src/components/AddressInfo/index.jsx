import './AddressInfo.css';

export default function AddressInfo({ endereco }) {
    return (
        <ul className="lista">
          <li>CEP: {endereco.cep}</li>
          <li>Rua: {endereco.rua}</li>
          <li>Bairro: {endereco.bairro}</li>
          <li>Cidade: {endereco.cidade}</li>
          <li>Estado: {endereco.estado}</li>
        </ul> 
    );
  }