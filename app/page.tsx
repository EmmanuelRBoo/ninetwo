import { Block, Separator, Card } from '@/components'
import items from '@/items';

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
          {items.ourNumbers.map((item, index) => <li key={index} className='text-xl border border-zinc-600 sm:w-96 p-2 rounded-md'><p>{item}</p></li>)}
        </ul>
      </Block>

      <Separator />

      <Block id='audiovisual'>
        <h2 className='mb-12 font-semibold text-center text-2xl md:text-4xl lg:text-5xl'>Por que você ainda não investe em <span className='text-primary'>audiovisual</span> ?</h2>

        <ul className='flex gap-8 flex-wrap justify-center overflow-scroll p-12 md:justify-start'>
          {items.audiovisual.map((item, index) => (
            <li key={index}>
              <Card size='sm'>
                <h2>{item.title}</h2>

                <p>{item.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Block>

      <Separator />

      <Block id='our_clients'>
        <h2>Nossos Clientes</h2>

        <ul className='grid gap-4 grid-cols-1 overflow-scroll p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {items.ourClients.map((items, index) => (
            <li key={index}>
              <Card size='sm'>
                <img
                  className='w-44 h-28 object-contain rounded-sm mx-auto'
                  src={items.image}
                  alt={items.title}
                />

                <h3 className='text-center mt-2 text-2xl font-semibold'>{items.title}</h3>
              </Card>
            </li>
          ))}
        </ul>
      </Block>

      <Separator />

      <Block id='portfolio'>
        <h2 className='mb-8 font-semibold text-center text-2xl md:text-4xl lg:text-5xl'>Portfólio</h2>

        <p className='text-xl mb-12 md:text-2xl text-gray-300'>Veja o que fazemos na prática!</p>

        <ul className='flex flex-wrap justify-center gap-4 mb-8 overflow-scroll'>
          {items.portfolio.map((item, index) => (
            <li key={index}>
              <Card size='lg'>
                <h3 className='text-2xl font-semibold text-center'>{item}</h3>
              </Card>
            </li>
          ))}
        </ul>
      </Block>

      <Separator />

      <Block id='solutions'>
        <h2 className='mb-8 font-semibold text-center text-2xl md:text-4xl lg:text-5xl'>Soluções audiovisuais para empresas</h2>

        <p className='text-xl mb-8 md:text-2xl text-primary'>Oferecemos um leque completo de soluções audiovisuais para impulsionar sua marca.</p>

        <ul className='grid grid-cols-1 gap-4 overflow-scroll p-8 xl:grid-cols-2'>
          {items.solutions.map((item, index) => (
            <li key={index}>
              <Card size='lg'>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>

                <p>{item.description}</p>

                <button className='bg-primary min-w-72 w-1/2 py-2 whitespace-nowrap rounded-md cursor-pointer'>SAIBA MAIS!</button>
              </Card>
            </li>
          ))}
        </ul>
      </Block>

      <Separator />

      <Block id='ancine'>
        <h2 className='flex items-center gap-4 text-primary font-semibold text-center text-2xl md:text-4xl lg:text-5xl'>Produtora Licenciada - Ancine <img className='w-24 rounded-md' src='https://www.brisateixeira.com/wp-content/uploads/2018/05/ancine.png' /></h2>
      </Block>

      <Separator />

      <Block id='why'>
        <h2 className='mb-12 font-semibold text-center text-2xl md:text-4xl lg:text-5xl'>Por que escolher a Motin Films?</h2>

        <ul className='flex items-center p-8 gap-4 justify-center overflow-scroll flex-wrap'>
          {items.why.map((item, index) => (
            <li key={index}>
              <Card size='lg'>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>

                <p>{item.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Block>

      <Separator />
    </main>
  );
}

