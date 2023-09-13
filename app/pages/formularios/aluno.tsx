
import { useState } from "react"
import Nav from "../../componentes/nav/navb"
import axios from "axios"
export default function Formulario() {

  const [Nome, setNome] = useState("");
  const [Senha, setSenha] = useState("");

  const data = {
    Nome_aluno: Nome
  };
  const enviar = () => {
    axios.post('http://localhost/php/API_POST/formAluno.php', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error('Erro na solicitação POST:', error);
      });

  }
  return (
    <main className="h-screen w-screen">

      <Nav />

      <input
        type='text'
        placeholder='Nome'
        value={Nome}
        onChange={(e) => setNome(e.target.value)}
        className="bg-slate-500"
      />

      <button onClick={enviar}>Enviar</button>







  

    </main>



  )

}