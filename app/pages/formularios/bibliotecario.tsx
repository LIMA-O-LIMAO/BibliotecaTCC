'use client'
import { useState } from "react"
import Nav from "../../componentes/nav/navb"
import axios from "axios"
import {  AtSign  } from "lucide-react"
export default function Bibliotecarios() {

    const [Nome, setNome] = useState("");
    const [Senha, setSenha] = useState("");
    const [Email, setEmail] = useState("");
    const [Cpf, setCpf] = useState("");

    const data = {
        Bibliotecario: Nome,
        Senha: Senha,
        Email: Email,
        CPF: Cpf
    };
    const enviar = () => {
        axios.post('http://localhost/php/API_POST/formbibliotecario.php', JSON.stringify(data), {
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
        //css tera que ser feito no global
    }
    return (
        <main className="h-screen w-screen">

            <Nav />

            <div className="flex justify-center items-center h-[50rem]">
                <section className=" flex flex-col justify-center items-center bg-black/80 h-[600px] rounded-md  w-[500px]">
                  <h1 className="text-white text-5xl">Formulario</h1>
                  
                  <h2 className="text-white text-3xl">Bibliotecario</h2>
                    <form className="w-2/3 flex gap-7 flex-col" >
                        <input
                            type='text'
                            placeholder='Nome'
                            value={Nome}
                            onChange={(e) => setNome(e.target.value)}
                            className=""
                        />
                        <input
                            type='password'
                            placeholder='Senha'
                            value={Senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className=""
                        />
                        <input
                            type='email'
                            placeholder='E-Mail'
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=""
                        />
                        <input
                            type='number'
                            placeholder='CPF'
                            value={Cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            className=""
                        />
<div className="flex justify-center">
                        <button onClick={enviar} className="bg-white w-40 rounded-md h-8 hover:text-lg">Enviar</button>
                        </div>
                    </form>

                </section>

            </div>



        </main>



    )

}