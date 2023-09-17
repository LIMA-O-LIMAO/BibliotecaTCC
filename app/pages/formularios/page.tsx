'use client'


import Bibliotecarios from "./bibliotecario"
import Aluno from "./aluno"
import { useState } from "react"
import { Target } from "lucide-react"

export default function Formularios() {

  const [Valor, setValor] = useState(1)
  return (
    <main>


      <select onChange={(e) => setValor(e.target.value)} value={Valor} >

        <option 
          value={1}
        >
          Alunos
        </option>

        <option 
         value={2}
        >
          Emprestimos
        </option>

        <option 
         value={3}
        >
          Livros
        </option>

      </select>






      {Valor == 1 && <Aluno /> }
      {Valor == 2 && <Bibliotecarios />}
    </main>
  )











} 