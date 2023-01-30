import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { CardList, Header, Footer, ShoppingCart } from "../components/index";
import Products from "../services/service";

export default function Home() {
  useEffect(() => {
    Products.get().then((resp) => {
      console.log(resp.data);
    });
  });
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
