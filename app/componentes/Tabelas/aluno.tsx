'use client' 

import { useState, useEffect } from "react";
import axios from "axios";


export default function Aluno(){

    const [postss, setPostss] = useState([]);


    useEffect(()=>{
  
    axios.get('http://localhost/php/API_GET/Alunos.php').then(function(res){
  
    setPostss(res.data)
    }
  
    )
     },[])

return(

    <section className=" h-[91.5vh] w-full pt-20 ">
    <table className="">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Matricula</th>
          <th>E-Mail</th>
          <th>Telefone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {postss.map(function (val) {
          return (
            <tr key={val}>
              <td>{val.nome_aluno}</td>
              <td>{val.matricula}</td>
              <td>{val.email_aluno}</td>
              <td>{val.num_telefone}</td>
              <td>{val.status_aluno}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>

)





}