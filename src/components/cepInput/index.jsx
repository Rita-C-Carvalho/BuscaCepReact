import './cepInput.css';

export default function CepInput({ onCepChange }) {
  return (
    <input className='cep-input'
      placeholder="Digite o CEP"
      onChange={onCepChange}
    />
  );
}