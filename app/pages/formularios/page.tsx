'use client'
import { useState,useEffect } from "react"
import Nav from "../../componentes/nav/navb"
import axios from "axios"
export default function Formulario() {

    const [postss, setPostss] = useState([]);


    useEffect(()=>{

axios.get('http://localhost/php/api.php').then(function(res){

setPostss(res.data)
}

)
    },[])
    
    return (
        <main className="h-screen w-screen">

        <Nav/>

  
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