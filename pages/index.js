import Head from "next/head";
import Catalogo from "../Catalogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Catálogo SIVCA</title>
        <meta name="description" content="Catálogo de promotoras y vestuario térmico SIVCA" />
      </Head>
      <Catalogo />
    </>
  );
}
