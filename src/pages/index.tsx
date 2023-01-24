import Head from "next/head";
import Image from "next/image";
import { CardList, Header, Footer, ShoppingCart } from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Home</title>
        <meta name="description" content="Product list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Header />
        <CardList />
        <Footer />
        <ShoppingCart />
      </main>
    </>
  );
}
