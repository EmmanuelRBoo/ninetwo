import { Block, Separator } from '@/components'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Block id='motin_films'>
        <h1 className='mb-8 font-light text-center text-4xl md:text-6xl lg:text-7xl'>
          Filmes de alto impacto
          <br />
          <span className='font-semibold'>com qualidade cinematográfica</span>
        </h1>

        <p className='text-center mb-12 text-xl md:text-2xl text-gray-300'>Criamos conteúdos que conectam marcas e pessoas através de histórias memoráveis</p>

        <button className='bg-primary min-w-72 w-1/2 py-2 whitespace-nowrap rounded-md cursor-pointer'>Conheça nossas soluções</button>
      </Block>

      <Separator />

      <Block id='our_numbers'>
        <h2 className='mb-8 font-semibold text-center text-2xl md:text-4xl lg:text-5xl'>Nossos números</h2>

        <ul className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
          <li className='text-xl border border-zinc-600 sm:w-96 p-2 rounded-md'><p>+10 anos de atuação</p></li>
          <li className='text-xl border border-zinc-600 sm:w-96 p-2 rounded-md'><p>+300 clientes satisfeitos</p></li>
          <li className='text-xl border border-zinc-600 sm:w-96 p-2 rounded-md'><p>+500 filmes registrados</p></li>
          <li className='text-xl border border-zinc-600 sm:w-96 p-2 rounded-md'><p>+2.000 projetos e filmes entregues</p></li>
        </ul>
      </Block>

      <Separator />
    </main>
  );
}

