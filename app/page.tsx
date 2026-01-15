import { Block } from '@/components'

export default function Home() {
  return (
    <main>
      <Block id='motin_films'>
        <h1 className='mb-8 font-light text-center text-4xl md:text-6xl lg:text-7xl '>
          Filmes de alto impacto
          <br />
          <span className='font-semibold'>com qualidade cinematográfica</span>
        </h1>

        <p className=' mb-12 text-xl md:text-2xl text-gray-300'>Criamos conteúdos que conectam marcas e pessoas através de histórias memoráveis</p>

        <button className='bg-primary min-w-72 w-1/2 py-2 whitespace-nowrap rounded-md cursor-pointer'>Conheça nossas soluções</button>
      </Block>
    </main>
  );
}

