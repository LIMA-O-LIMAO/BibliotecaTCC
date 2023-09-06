import Link from "next/link"
import { UserCircle2 } from 'lucide-react';

export default function Nav(){


    return(
<nav className="bg-red-700 flex flex-row h-20 items-center">
    <Link href='./'>
<img src="../logo.jpg" className="rounded-[50%] w-14 h-14 cursor-pointer ml-4" />
</Link>
<div className=" flex justify-center items-center w-full">
    <ul className="flex flex-row gap-20 text-2xl text-white">
 <Link href="./pages/formularios">
    <li className="hover:font-bold"> Alunos</li></Link>
        <li>Teste</li>
        <li> dinovo</li>
    </ul>

    </div>
<div className="flex justify-end items-center">


<UserCircle2 color="white" size={38} strokeWidth={1} className="mr-4"></UserCircle2>

</div>
</nav>



    )
}