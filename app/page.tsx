'use client'




import { useState, useEffect } from "react"
import axios from 'axios';
import { data } from "autoprefixer";


export default function Home() {



  const [Nome,setNome] = useState("");
  const [Senha,setSenha ] = useState("");




const data={

  Usuario:Nome,
  Senhas:Senha

}


const Clique = () => {


  axios.post('http://localhost/php/API_POST/login.php', JSON.stringify(data), {
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
    <main>
      <section className='flex justify-center h-screen w-screen'>

        <div className='flex justify-center items-center '>

          <div className='bg-zinc-800/90 flex justify-center flex-col w-80 h-[450px] items-center rounded-2xl gap-12'>


            <h1 className='text-3xl text-white '>Login</h1>
            
            
            
            <div className='mt-2 flex items-center justify-center flex-col gap-5 '>
              
              <input type="text" 
              value={Nome} 
              placeholder='joao' 
              onChange={(e)=>setNome(e.target.value)}
              />
              

              <input type='password'
                placeholder='***'
               value={Senha}
              onChange={(e)=>setSenha(e.target.value) }
              />
            </div>
                          <button 
                          onClick={Clique} 
                          className='rounded-[0.8rem] bg-white h-10 w-48'>
                            Logar
                          </button>
                   </div>

        </div>

      </section>

    </main>


  )
}
