import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco]= useState(null)
  const handleBuscaCep = async (event) => {
     try {
    
     // Utilize o fetch para fazer uma requisição à API do ViaCEP
     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
     // Verifique se a resposta da API foi bem-sucedida
     if (!response.ok) {
     throw new Error('CEP não encontrado.');
     }
    
     // Converta a resposta para JSON e atualize o estado endereco
     const data = await response.json();
     setEndereco(data);
     } catch (error) {
    
     // Trate exceções e exiba mensagens de erro no console
     console.error(error);
     }
     };
    
  return (
    <>
      <div className='container'>
        <h1>Busca de endereço</h1>
        <input 
        type="number" 
        placeholder='Digite seu CEP'
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        required
        />
        <button onClick={handleBuscaCep}>
        Buscar

        </button> <br/><br/>
        <div className='endereço'>
      {endereco ? (
      <>
      <p>Rua: {endereco.logradouro}</p>
      <p>Bairro: {endereco.bairro}</p>
      <p>Cidade: {endereco.localidade}</p>
      <p>Estado: {endereco.uf}</p><br/>
      </>
      ) : (null)
      }
      </div>
      </div>
      
    </>
  )
}

export default App
