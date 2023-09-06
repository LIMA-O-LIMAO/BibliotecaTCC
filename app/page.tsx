

export default function Home() {
  
  return (
<main>
<section className='flex justify-center h-screen w-screen'>

<div className='flex justify-center items-center '>

<div className='bg-zinc-800/90 flex justify-center flex-col w-80 h-[450px] items-center rounded-2xl gap-12'>
<h1 className='text-3xl text-white '>Login</h1>
<div className='mt-2 flex items-center justify-center flex-col gap-5 '>
<input  type="text" placeholder='joao' />


<input type="password" placeholder='***' />
</div>
<a href="./pages/">
<button  className='rounded-[0.8rem] bg-white h-10 w-48'>Logar</button>
</a>
</div>

</div>

</section>

</main>


  )
}
