'use client'

import { useState } from "react"
import Nav from "../../componentes/nav/navb"
import Aluno from "../../componentes/Tabelas/aluno"
import Bibliotecario from "../../componentes/Tabelas/bibliotecario"
import Livro from "../../componentes/Tabelas/livro"


export default function Tela(){

const [Tabelas,setTabelas]=useState(1)

    return(
        <main className="h-screen w-screen">

<Nav/>

<select
onChange={(e)=>setTabelas(e.target.value)}
 value={Tabelas}>
    <option 
    value={1}>
        Aluno
    
    </option>

    <option 
    value={2}>
        Bibliotecarios
    </option>

    
    <option 
    value={3}>
        Livros
    </option>

    


</select>

{Tabelas==1 && <Aluno/>}
{Tabelas==2 && <Bibliotecario/>}
{Tabelas==3 && <Livro/>}

            </main>

    )
}