'use client' 

import { useState, useEffect } from "react";
import axios from "axios";


export default function Bibliotecario(){

    const [postss, setPostss] = useState([]);


    useEffect(()=>{
  
    axios.get('http://localhost/php/API_GET/bibliotecarios.php').then(function(res){
  
    setPostss(res.data)
    }
  
    )
     },[])

return(

    <section className=" h-[91.5vh] w-full pt-20 ">
    <table className="">
      <thead>
        <tr>
          <th>Bibliotecario</th>
          <th>E-Mail</th>
          <th>CPF</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {postss.map(function (val) {
          return (
            <tr key={val}>
              <td>{val.nome_bibi}</td>
              <td>{val.email}</td>
              <td>{val.CPF}</td>
              <td>{val.Status_bibliotecario}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>

)





}