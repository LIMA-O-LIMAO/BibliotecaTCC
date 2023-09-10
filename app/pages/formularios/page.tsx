'use client'
import { useState, useEffect } from "react"
import Nav from "../../componentes/nav/navb"
import axios from "axios"
export default function Formulario() {

  const [Nome, setNome] = useState("");
  const [Senha, setSenha] = useState("");

  const data = {
    Nome_aluno: Nome
  };
  const enviar = () => {
    axios.post('http://localhost/php/formAluno.php', JSON.stringify(data), {
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







      <section className=" h-[91.5vh] w-full pt-20 ">
        <table className="">
          <thead>
            <tr>
              <th>Nome do livro</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {postss.map(function (val) {
              return (
                <tr key={val}>
                  <td>{val.livro}</td>
                  <td>{val.Autor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

    </main>



  )

}