import Head from 'next/head'
import Catalogo from '../Catalogo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Catálogo PromoPolar</title>
        <meta
          name="description"
          content="Catálogo de promotoras y vestuario térmico PromoPolar"
        />
      </Head>
      <Catalogo />
    </>
  )
}
