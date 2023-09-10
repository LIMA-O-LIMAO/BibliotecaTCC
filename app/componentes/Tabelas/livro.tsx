'use client' 

import { useState, useEffect } from "react";
import axios from "axios";


export default function Livro(){

    const [postss, setPostss] = useState([]);


    useEffect(()=>{
  
    axios.get('http://localhost/php/API_GET/livro.php').then(function(res){
  
    setPostss(res.data)
    }
  
    )
     },[])

return(

    <section className=" h-[91.5vh] w-full pt-20 ">
    <table className="">
      <thead>
        <tr>
          <th>Nome do livro</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>Data de Inatividade</th>
          <th>Motivo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {postss.map(function (val) {
          return (
            <tr key={val}>
              <td>{val.livro}</td>
              <td>{val.Autor}</td>
              <td>{val.Editora}</td>
              <td>{val.data_inativacao}</td>
              <td>{val.Motivo}</td>
              <td>{val.Status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>

)





}