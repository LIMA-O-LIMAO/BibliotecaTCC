'use client'

import Link from 'next/link'


import { useState } from "react"
import axios from 'axios';
import { text } from 'stream/consumers';

export default function Home() {



  const [setNome, Nome] = useState("");
  const [setSenha, Senha] = useState("");





  const Clique = () => {







    //if(Nome=variavelBd && Senha=VariavelsBD){



    //return(

    //<Link href="./pages/"/>
    //)

    //}

    //senha=variaveldoBD
    //nome tbm, logue






  }

  return (
    <main>
      <section className='flex justify-center h-screen w-screen'>

        <div className='flex justify-center items-center '>

          <div className='bg-zinc-800/90 flex justify-center flex-col w-80 h-[450px] items-center rounded-2xl gap-12'>
            <h1 className='text-3xl text-white '>Login</h1>
            <div className='mt-2 flex items-center justify-center flex-col gap-5 '>
              <input type="text" value='Nome_aluno' placeholder='joao' />


              <input type='text' placeholder='***' />
            </div>
            <Link href="./pages/">
              <button onClick={Clique} className='rounded-[0.8rem] bg-white h-10 w-48'>Logar</button>
            </Link>
          </div>

        </div>

      </section>

    </main>


  )
}
