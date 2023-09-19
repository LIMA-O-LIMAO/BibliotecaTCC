'use client'

import { useState } from "react"
import Nav from "../../componentes/nav/navb"
import Aluno from "../../componentes/Tabelas/aluno"
import Bibliotecario from "../../componentes/Tabelas/bibliotecario"
import Livro from "../../componentes/Tabelas/livro"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function Tela(){

const [Tabelas,setTabelas]=useState(1)

    return(
        <main className="h-full w-full">

<Nav/>

<Select className="Selecao m-4 absolute right-80"
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Tabelas}
        label="Tabela"
        onChange={(e)=>setTabelas(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Aluno</MenuItem>
        <MenuItem value={2}>Bibliotecario</MenuItem>
        <MenuItem value={3}>Livro</MenuItem>
      </Select>

{Tabelas==1 && <Aluno/>}
{Tabelas==2 && <Bibliotecario/>}
{Tabelas==3 && <Livro/>}

            </main>

    )
}